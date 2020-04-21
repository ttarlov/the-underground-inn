import $ from 'jquery';
import domUpdates from './dom-updates.js'
import ApiController from './api-controller';
import CustomerRepo from './Customer-repo'
import Room from './Room'
import Booking from './Booking'
import Manager from './Manager'
import User from './User'
import Customer from './Customer'
import './css/base.scss';


const api = new ApiController();
const moment = require("moment");
let loggedInCustomer;
let manager = null;
let customerRepo;

const generateUserId = () => {
  let userName = $('#username-input').val();
  let userId = userName.match(/\d+/g);
  if(userId > 50) {
    window.alert('user id does not exist, try again')
    location.reload();
  } else {
    return Number(userId);
    }
}

function processLogIn(data) {
  if($('#password-input').val() === 'overlook2019' && $('#username-input').val().includes('customer') && $('#username-input').val().length > 8)  {
      event.preventDefault();
      fetchData(createClinet, generateUserId())
      domUpdates.hideLoginWindow();
      domUpdates.addCustomerNavBar();

  } else if ($('#password-input').val() === 'overlook2019' && $('#username-input').val().includes('manager')) {
    event.preventDefault();
      fetchData(createManager)
      domUpdates.hideLoginWindow();
      domUpdates.addManagerNavBar();
  } else {
    window.alert("Wrong Password or User Name");
  }
};

const fetchData = (entity, customerID) => {
  let fetchedAllRooms = api.getAllRooms();
  let fetchedAllBookings = api.getAllBookings();
  let fetchedAllUsers = api.getAllUsers();

  Promise.all([fetchedAllRooms, fetchedAllBookings, fetchedAllUsers])
  .then(fetchedData => {
    let allRooms = fetchedData[0].rooms;
    let allBookings = fetchedData[1].bookings;
    let allUsers = fetchedData[2].users;
    entity(allRooms, allBookings, allUsers, customerID)
  }).catch(error => console.log(error.message));
}



const createManager = (allRooms, allBookings, allUsers) => {
  let allRoomsArray = allRooms.map(room => new Room(room));
  let allBookingsArray = allBookings.map(booking => new Booking(booking));
  let allUsersArray = allUsers.map(user => new User(user));

  customerRepo = new CustomerRepo(allUsersArray, allBookingsArray, allRoomsArray);
  manager = new Manager(customerRepo.customers, allBookingsArray, allRoomsArray);

  manager.calculateTotalRevenueForToday();
  manager.findPercentageOfRoomsOccupiedForToday();
  domUpdates.showCustomerSearch(manager.customers)
};


const createClinet = (allRooms, allBookings, allUsers, customerID) => {
  let allRoomsArray = allRooms.map(room => new Room(room));
  let allBookingsArray = allBookings.map(booking => new Booking(booking));
  let allUsersArray = allUsers.map(user => new User(user))
  customerRepo = new CustomerRepo(allUsersArray, allBookingsArray, allRoomsArray)
  loggedInCustomer = new Customer(customerRepo.getCustomerById(customerID))
  loggedInCustomer.calculateTotalAmountSpent();
};

const eventHandler = (event) => {
  if (event.target.id === "past-bookings") {
    loggedInCustomer.findPastBookings();
  } else if (event.target.id === "today-bookings") {
    loggedInCustomer.findBookingsForToday();
  } else if (event.target.id === "book-room") {
    domUpdates.showRoomBooking();
  } else if (event.target.id === "future-bookings") {
    loggedInCustomer.findFutureBookings();
  } else if(event.target.id === "check-rooms") {
    customerRepo.getRoomsAvailableForGivenDate($("#input-date").val().split("-").join("/"))
  } else if(event.target.id === "filter-btn") {
    searchByRoomType()
  } else if(event.target.classList.contains("book-room")) {
    loggedInCustomer.submitABooking(loggedInCustomer.id, customerRepo.choosenDate, event.target.id)
    .then(() => fetchData(createClinet, loggedInCustomer.id))
    .then(() => window.alert("Booking Successful 👍"))
    $(".filter-container").addClass("hidden");
  } else if (event.target.id === "search-customer") {
      let targetCustomerID = Number($("#selected-customer").val());
      let targerCustomerObj = manager.getCustomerById(targetCustomerID);
      loggedInCustomer = new Customer(targerCustomerObj)
      domUpdates.showGivenCustomerBookingInfo(loggedInCustomer)
  } else if(event.target.id === "search-selected-customer-bookings") {
      domUpdates.showBookingsForCustomerWhenManager(loggedInCustomer.bookings)
  } else if(event.target.id === "dash-btn") {
    $("main").html("");
    $(".nav-btns-container").html("");

    fetchData(createManager);
  } else if(event.target.classList.contains("delete-btn")) {
    api.deleteBooking(event.target.id).then(()=> window.alert("Booking Deleted. GREAT SUCCESS 👌"))
    .then(()=> event.target.closest(".booking-cards").remove())
  }
}








const searchByRoomType = () => {
  let selectedRoomType = $("#tags").val()
  customerRepo.filterRoomsByType(selectedRoomType)
}



$('#log-in-btn').click(processLogIn)
$('body').click(eventHandler)

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import domUpdates from './dom-updates.js'
import ApiController from './api-controller';
import CustomerRepo from './Customer-repo'
import Room from './Room'
import Booking from './Booking'
import Manager from './Manager'
import User from './User'
import Customer from './Customer'
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/turing-logo.png'

const api = new ApiController();
const moment = require("moment");
let loggedInCustomer;
let manager;

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

// will go inside a user class
function processLogIn(data) {
  if($('#password-input').val() === 'overlook2019' && $('#username-input').val().includes('customer'))  {
      event.preventDefault();
      fetchData(createClinet, generateUserId())
      domUpdates.hideLoginWindow();
      domUpdates.addNavBar();

  } else if ($('#password-input').val() === 'overlook2019' && $('#username-input').val().includes('manager')) {
    event.preventDefault();
      fetchData(createManager);
      domUpdates.hideLoginWindow();
      domUpdates.addNavBar();

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
  })//.catch(error => console.log(error.message));
}



const createManager = (allRooms, allBookings, allUsers) => {
  let allRoomsArray = allRooms.map(room => new Room(room));
  let allBookingsArray = allBookings.map(booking => new Booking(booking));
  manager = new Manager(allBookingsArray, allRoomsArray);

  manager.calculateTotalRevenueForToday();
  manager.findPercentageOfRoomsOccupiedForToday();

    console.log(manager);
};


const createClinet = (allRooms, allBookings, allUsers, customerID) => {
  let allRoomsArray = allRooms.map(room => new Room(room));
  let allBookingsArray = allBookings.map(booking => new Booking(booking));
  let allUsersArray = allUsers.map(user => new User(user))
  let customerRepo = new CustomerRepo(allUsersArray, allBookingsArray, allRoomsArray)
  loggedInCustomer = new Customer(customerRepo.getCustomerById(customerID))
  console.log(loggedInCustomer);
};

const eventHandler = (event) => {
  if (event.target.id === "past-bookings") {
    loggedInCustomer.findPastBookings();
  } else if (event.target.id === "today-bookings") {
    loggedInCustomer.findBookingsForToday();
  }
}






$('#log-in-btn').click(processLogIn)
$('body').click(eventHandler)

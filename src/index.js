// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import domUpdates from './dom-updates.js'
import User  from './user';
import ApiController from './api-controller';
import CustomerRepo from './Customer-repo'
import Room from './Room'
import Booking from './Booking'
import Manager from './Manager'
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/turing-logo.png'

const api = new ApiController();
const moment = require("moment");

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
      domUpdates.hideLoginWindow()
    // getTravelerData()
    // domUpdates.hideLoginWindow();
  } else if ($('#password-input').val() === 'overlook2019' && $('#username-input').val().includes('manager')) {
    event.preventDefault();
      getManagerData()
      domUpdates.hideLoginWindow();
      domUpdates.addNavBar();
    // getAgencyData();
    // domUpdates.hideLoginWindow();
    // domUpdates.showWelcomeCard();
  } else {
    window.alert("Wrong Password or User Name");
  }
};

const getManagerData = () => {
  let fetchedAllRooms = api.getAllRooms();
  let fetchedAllBookings = api.getAllBookings();
  let fetchedAllUsers = api.getAllUsers();

  Promise.all([fetchedAllRooms, fetchedAllBookings, fetchedAllUsers])
  .then(fetchedData => {
    let allRooms = fetchedData[0].rooms;
    let allBookings = fetchedData[1].bookings;
    let allUsers = fetchedData[2].users;
    createManager(allRooms, allBookings, allUsers)
  })//.catch(error => console.log(error.message));
}


const createManager = (allRooms, allBookings, allUsers) => {
  let allRoomsArray = allRooms.map(room => new Room(room));
  let allBookingsArray = allBookings.map(booking => new Booking(booking));
  let manager = new Manager(allBookingsArray, allRoomsArray)

  manager.getTotalRoomsAvailableToday()
  manager.calculateTotalRevenueForToday();
    console.log(manager);
  // console.log(allRooms);
  // console.log(allBooking);
  // console.log(allUsers);
}







$('#log-in-btn').click(processLogIn)

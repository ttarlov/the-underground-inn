// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import domUpdates from './dom-updates.js'
import User  from './user';
import ApiController from './api-controller';
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/turing-logo.png'


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
    // getAgencyData();
    // domUpdates.hideLoginWindow();
    // domUpdates.showWelcomeCard();
  } else {
    window.alert("Wrong Password or User Name")
  }
};











$('#log-in-btn').click(processLogIn)

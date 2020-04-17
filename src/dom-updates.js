import $ from 'jquery';

let domUpdates = {

hideLoginWindow() {
  $(".neon-sign-login-container").slideUp(500)
},

addNavBar() {
  $('.nav-bar-container').prepend(`<nav>
      <div class="logo"><b>THE<span> UNDER</span>GROUND <span>INN</span></b></div>
    </nav>`).hide().show(750)
},

showAvailableRoomsTodayCard(availableRooms) {
  $('main').prepend(`<section class= "available-rooms-card">
      <p>Available Rooms For Today</p>
      <p>${availableRooms}</p>
  </section>`)
},

showTotalRevenueForToday(totalRevenue) {
  $('main').prepend(`<section class="total-revenue-card">
  <p>Total Revenue For Today</p>
  <p>$${totalRevenue}</p>
  </section>`)
}


}

export default domUpdates;

import $ from 'jquery';

let domUpdates = {

hideLoginWindow() {
  $(".neon-sign-login-container").slideUp(500)
},

addNavBar() {
  $('.nav-bar-container').prepend(`<nav>
      <div class="nav-logo"><b>THE<span> UNDER</span>GROUND <span>INN</span></b></div>
      <section class="nav-btns-container">
      <button class="nav-btn" id="past-bookings">Past Room Bookings</button>
      <button class="nav-btn" id="today-bookings">Current Room Bookings</button>
      <button class="nav-btn" id="future-bookings">Future Room Bookings</button>
      </section>
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
},

showPecentageOfRoomsOccupied(totalPercentage) {
  $('main').prepend(`<section class="total-percentage-occupied">
  <p>Rooms Occupied Today</p>
  <p>${totalPercentage}%</p>
  </section>`)
},

showPastBookings(pastBookings) {
  $("main").html("");
  $("main").prepend(`<section class="bookings-container"> </section>`)
  pastBookings.forEach(booking => {
    $(".bookings-container").prepend(`
      <section class="booking-cards">
      <p>Booking Date: ${booking.date}</p>
      <p>Room Number: ${booking.roomNumber}</p>
      <p>Rooms Service Charges: ${booking.roomServiceCharges}
      </section>
      `)
  })
},

showBookingsForToday(todaysBookings) {
  console.log(todaysBookings);
  if(todaysBookings.length === 0) {
    $("main").html("");
    $("main").prepend(`<section class="booking-cards">
      <p class="no-rooms-found">You Have No Rooms Booked for Today</p>
    </section>`)
  } else {
    $("main").html("");
    $("main").prepend(`<section class="bookings-container"> </section>`)
    todaysBookings.forEach(booking => {
      $(".bookings-container").prepend(`
        <section class="booking-cards">
        <p>Booking Date: ${booking.date}</p>
        <p>Room Number: ${booking.roomNumber}</p>
        <p>Rooms Service Charges: ${booking.roomServiceCharges}
        </section>
        `)
    });
  }
}


} //domUpdates Closes Here

export default domUpdates;

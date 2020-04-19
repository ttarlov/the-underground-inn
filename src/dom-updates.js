import $ from 'jquery';
const moment = require("moment");
let domUpdates = {

hideLoginWindow() {
  $(".neon-sign-login-container").slideUp(500)
},

addCustomerNavBar() {
  $('.nav-bar-container').prepend(`<nav>
      <div class="nav-logo"><b>THE<span> UNDER</span>GROUND <span>INN</span></b></div>
      <section class="nav-btns-container">
      <button class="nav-btn" id="past-bookings">Past Room Bookings</button>
      <button class="nav-btn" id="today-bookings">Current Room Bookings</button>
      <button class="nav-btn" id="future-bookings">Future Room Bookings</button>
      <button class="nav-btn" id="book-room"> Book A Room </button>
      </section>
    </nav>`).hide().show(750)
},


addManagerNavBar() {
  $('.nav-bar-container').prepend(`<nav>
      <div class="nav-logo"><b>THE<span> UNDER</span>GROUND <span>INN</span></b></div>
      <section class="nav-btns-container">
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
},

showFutureBookings(futureBookings) {
  if(futureBookings.length === 0) {
    $("main").html("");
    $("main").prepend(`<section class="booking-cards">
      <p class="no-rooms-found">You Have No Rooms Booked</p>
    </section>`)
  } else {
    $("main").html("");
    $("main").prepend(`<section class="bookings-container"> </section>`)
    futureBookings.forEach(booking => {
      $(".bookings-container").prepend(`
        <section class="booking-cards">
        <p>Booking Date: ${booking.date}</p>
        <p>Room Number: ${booking.roomNumber}</p>
        <p>Rooms Service Charges: ${booking.roomServiceCharges}
        </section>
        `)
    });
  }
},

showAmountSpentOnRooms(name, totalAmount) {
  console.log(totalAmount);
  $("main").prepend(`<section class="booking-cards">
    <p class="no-rooms-found"> Welcome ${name}</p>
    <p class="no-rooms-found"> So Far You Spent: $${totalAmount} on bookings</p>
  </section>`)
},

showRoomBooking() {
  $("main").html("");
  $("main").prepend(`<section class="booking-cards">
  <p class="no-rooms-found"> Book A Room</p>
   <form>
    <label>Select Date:</label>
    <input type="date" id="input-date" name="booking-date"
       value="${moment().format("YYYY-MM-DD")}"
       min="${moment().format("YYYY-MM-DD")}" min= "${moment().format("YYYY-MM-DD")}" max="2028-12-31">
       <button type="button" class="available-rooms-btn" id="check-rooms">See Available Rooms</button>
   </form>
  </section>`)
},

showAvailableRooms(availableRooms) {

  console.log(availableRooms);
  $("main").html("");
  $(".filter-container").removeClass("hidden")
  $('main').prepend(`<section class="room-card-container">
  </section>`);

  availableRooms.forEach(room => {
    if(room.bidet === true) {
      $(".room-card-container").prepend(`<section class="room-card" id=${room.number}>
      <h2>Room Type: <span class="room-type">${room.roomType}</span></h2>
      <h3 class="included-amenities">Amenities:</h3>
      <p class="amenity">Bidet: Yes</p>
      <p class="amenity">Bed Size: ${room.bedSize}</p>
      <p class="amenity">Number of Beds: ${room.numBeds}</p>
      <p class="room-cost">Cost Per Night: $${room.costPerNight}</p>
      </section>`)
    } else {
      $(".room-card-container").prepend(`<section class="room-card" id=${room.number}>
      <h2>Room Type: <span class="room-type">${room.roomType}</span></h2>
      <h3 class="included-amenities">Amenities:</h3>
      <p class="amenity">Bidet: No</p>
      <p class="amenity">Bed Size: ${room.bedSize}</p>
      <p class="amenity">Number of Beds: ${room.numBeds}</p>
      <p class="room-cost">Cost Per Night: $${room.costPerNight}</p>
      </section>`)
    }

  })
}


}; //domUpdates Closes Here

export default domUpdates;

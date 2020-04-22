import $ from 'jquery';
const moment = require("moment");
let domUpdates = {

hideLoginWindow() {
  $(".neon-sign-login-container").slideUp(500)
},

addCustomerNavBar() {
  $('.nav-bar-container').prepend(`<nav>
      <section lable="Logo" class="nav-logo"><b label="the underground inn">THE<span> UNDER</span>GROUND <span>INN</span></b></div>
      <section class="nav-btns-container">
      <button class="nav-btn" id="past-bookings">Past Bookings</button>
      <button class="nav-btn" id="today-bookings">Current Bookings</button>
      <button class="nav-btn" id="future-bookings">Future Bookings</button>
      <button class="nav-btn" id="book-room"> Book A Room </button>
      </section>
    </nav>`).hide().show(750)
},


addManagerNavBar() {
  $('.nav-bar-container').prepend(`<nav>
      <section lable="Logo" class="nav-logo"><b>THE<span> UNDER</span>GROUND <span>INN</span></b></section>
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
  $(".filter-container").addClass("hidden")
  $("main").html("");
  $("main").prepend(`<section class="bookings-container"> </section>`)
  pastBookings.forEach(booking => {
    $(".bookings-container").prepend(`
      <section class="booking-cards">
      <h2>${booking.bookedRoom.roomType}</h2>
      <h3>Booking Date: ${booking.date}</h3>
      <h4>Room Number: ${booking.roomNumber}</h4>
      </section>
      `)
  })
},

showBookingsForToday(todaysBookings) {
  $(".filter-container").addClass("hidden")
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
        <h2>${booking.bookedRoom.roomType}</h2>
        <h3>Booking Date: ${booking.date}</h3>
        <h4>Room Number: ${booking.roomNumber}</h4>
        </section>
        `)
    });
  }
},

showFutureBookings(futureBookings) {
  if(futureBookings.length === 0) {
    $(".filter-container").addClass("hidden")
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
        <h2>${booking.bookedRoom.roomType}</h2>
        <h3>Booking Date: ${booking.date}</h3>
        <h4>Room Number: ${booking.roomNumber}</h4>
        </section>
        `)
    });
  }
},

showBookingsForCustomerWhenManager(loggedInCustomer) {

  if(loggedInCustomer.length === 0) {
    $(".filter-container").addClass("hidden")
    $("main").html("");
    $("main").prepend(`<section class="booking-cards">
      <p class="no-rooms-found">You Have No Rooms Booked</p>
    </section>`)
  } else {
    $("main").html("");
    $("main").prepend(`<section class="bookings-container"> </section>`)
    loggedInCustomer.forEach(booking => {
      let deleteBtn = null;
      if(moment(booking.date, "YYYY/MM/DD").fromNow().includes('ago')) {
        deleteBtn = "";
      } else {
        deleteBtn = `<button class="delete-btn" id="${booking.id}">Delete Button</button>
        </section>`

      }
      $(".bookings-container").prepend(`
        <section class="booking-cards">
        <h2>${booking.bookedRoom.roomType}</h2>
        <h3>Booking Date: ${booking.date}</h3>
        <h4>Room Number: ${booking.roomNumber}</h4>
        ${deleteBtn}`
        )
    });
  }

},



showAmountSpentOnRooms(name, totalAmount) {
  $("main").html("")
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
       min="${moment().format("YYYY-MM-DD")}" max="2028-12-31"</input>
       <button type="button" class="available-rooms-btn" id="check-rooms">See Available Rooms</button>
   </form>
  </section>`)
},

showAvailableRooms(availableRooms) {

  $("main").html("");
  $(".filter-container").removeClass("hidden")
  $('main').prepend(`<section class="room-card-container">`);

  availableRooms.forEach(room => {
    let bidet = null;
    if(room.bidet === true) {
       bidet = `yes`
    } else{
      bidet = `no`
    }
      $(".room-card-container").prepend(`<section class="room-card">
      <h2>Room Type: <span class="room-type">${room.roomType}</span></h2>
      <h3 class="included-amenities">Amenities:</h3>
      <p class="amenity">Bidet: ${bidet}</p>
      <p class="amenity">Bed Size: ${room.bedSize}</p>
      <p class="amenity">Number of Beds: ${room.numBeds}</p>
      <p class="room-cost">Cost Per Night: $${room.costPerNight}</p>
      <button class="book-room" type="button"  id=${room.number}>Book This Room</button>
      </section>`)
  })
},

showCustomerSearch(allCustomers) {
  let customerNames = allCustomers.map(customer => {
    return `<option value="${customer.id}">${customer.name}</option>`
  })
  $(".nav-btns-container").prepend(`

    <section class="customer-search">

    <section class="search-container">
      <button id="dash-btn" type="button">Dash Board</button>
      <label for="filter by type">Search Customers:</label>
      <select id="selected-customer">
        ${customerNames}
      </select>
      <button id="search-customer" type="button">Search</button>


    </section>
    `)

},

showGivenCustomerBookingInfo(loggedInCustomer) {
  $("main").html("");
  $("main").prepend(`<section class="customer-details-containter">
    <h2>${loggedInCustomer.name}</h2>
    <h3>Total Spent on Bookings:${loggedInCustomer.totalAmountSpent}</h3>
    <button id="search-selected-customer-bookings" type="button">Search ${loggedInCustomer.name.split(" ")[0]}'s Bookigns</button>
    <button id="book-a-room-for-customer" type="button">Book a Room for ${loggedInCustomer.name.split(" ")[0]}</button>
    </section>
    `)
}





}; //domUpdates Closes Here

export default domUpdates;

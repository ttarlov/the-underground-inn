const moment = require("moment");
class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = customer.bookings;
  }


  findPastBookings() {
    return this.bookings.filter(booking => moment(booking.date, "YYYY/MM/DD").fromNow().includes('ago'))
  }

  findBookingsForToday() {
    return this.bookings.filter(booking => booking.date === moment().format("YYYY/MM/DD"))
  }

  findFutureBookings() {
    return this.bookings.filter(booking => moment(booking.date, "YYYY/MM/DD").fromNow().includes('in'))
  }


}
export default Customer

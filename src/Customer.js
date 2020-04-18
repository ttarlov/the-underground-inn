const moment = require("moment");
class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = customer.bookings;
  }


  findPastBookings() {
    return this.bookings.filter(booking => {
    return  moment(booking.date, "YYYY/MM/DD").fromNow().includes('ago')
    })
  }

}
export default Customer

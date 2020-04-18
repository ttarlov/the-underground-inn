const moment = require("moment");
import domUpdates from './dom-updates'
class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = customer.bookings;
  }


  findPastBookings() {
    let pastBookings = this.bookings.filter(booking => moment(booking.date, "YYYY/MM/DD").fromNow().includes('ago'))
    domUpdates.showPastBookings(pastBookings) // <---TEST WITH SPIES
    return pastBookings
  }

  findBookingsForToday() {
    let todaysBookings = this.bookings.filter(booking => booking.date === moment().format("YYYY/MM/DD"))
    domUpdates.showBookingsForToday(todaysBookings);
    return todaysBookings
  }

  findFutureBookings() {
    return this.bookings.filter(booking => moment(booking.date, "YYYY/MM/DD").fromNow().includes('in'))
  }

  calculateTotalAmountSpent() {
    return this.bookings.reduce((totalSpend, booking) => {

      totalSpend += booking.bookedRoom.costPerNight

      return totalSpend
    },0)
  }


}
export default Customer

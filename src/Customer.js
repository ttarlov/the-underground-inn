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
    domUpdates.showPastBookings(pastBookings)
    return pastBookings
  }

  findBookingsForToday() {
    let todaysBookings = this.bookings.filter(booking => booking.date === moment().format("YYYY/MM/DD"))
    domUpdates.showBookingsForToday(todaysBookings);
    return todaysBookings
  }

  findFutureBookings() {
    let futureBookings = this.bookings.filter(booking => moment(booking.date, "YYYY/MM/DD").fromNow().includes('in'))
    domUpdates.showFutureBookings(futureBookings)
    return futureBookings
  }

  calculateTotalAmountSpent() {
  let totalAmount =  this.bookings.reduce((totalSpend, booking) => {

      totalSpend += booking.bookedRoom.costPerNight

      return totalSpend
    },0).toFixed(2)
    domUpdates.showAmountSpentOnRooms(this.name, totalAmount)
  return totalAmount

  }


}
export default Customer

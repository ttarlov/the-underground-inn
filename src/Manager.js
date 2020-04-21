const moment = require("moment");
import domUpdates from './dom-updates';
import CustomerRepo from './Customer-repo'

class Manager extends CustomerRepo{
  constructor(allCustomers, allBookings, allRooms) {
    super(allCustomers, allBookings, allRooms)
    this.today = moment().format("YYYY/MM/DD");
    this.todaysBookings = this.findTodaysBookings()
    this.selectedCustomer = null;
  }

  // getAvailableRoomsForToday() {
  //
  //
  // }


// addRoomsToBookings(allRooms) {
//   this.bookings.forEach(booking => {
//     let matchedRoom = allRooms.find(room => {
//       return room.number === booking.roomNumber
//     })
//     booking.bookedRoom = matchedRoom;
//   })
// }
//
// addBookingsToCustomers() {
//   this.customers.forEach(customer => {
//     customer.bookings = this.bookings.filter(booking => {
//         return booking.userID === customer.id
//       })
//   })
// }


getTotalRoomsAvailableToday() {
  let totalRooms = 25;
  let totalBookingsForToday = 0;
  this.bookings.forEach(booking => {
    if(booking.date === this.today) {
      totalBookingsForToday++;
    }
  });
  let availableRooms = totalRooms - totalBookingsForToday
  domUpdates.showAvailableRoomsTodayCard(availableRooms);
  return availableRooms;
}


calculateTotalRevenueForToday() {

  let totalRevenue = this.todaysBookings.reduce((totalRevenue, booking) => {

    totalRevenue += booking.bookedRoom.costPerNight
    return totalRevenue
  },0)

  domUpdates.showTotalRevenueForToday(totalRevenue.toFixed(2));
  return totalRevenue;
}


findTodaysBookings() {
  return  this.bookings.filter(booking => booking.date === this.today);
}



findPercentageOfRoomsOccupiedForToday() {
  let totalPercentage = 100 - ((this.getTotalRoomsAvailableToday() / 25) * 100)
  domUpdates.showPecentageOfRoomsOccupied(totalPercentage);
  return totalPercentage;
}






}

export default Manager

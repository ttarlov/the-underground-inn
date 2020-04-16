const moment = require("moment");

class Manager {
  constructor(allBookings, allRooms) {
    this.bookings = allBookings;
    this.todaysBookings = this.findTodaysBookings()
    this.addRoomsToBookings(allRooms)
  }

  getAvailableRoomsForToday() {


  }


addRoomsToBookings(allRooms) {
  this.bookings.forEach(booking => {
    let matchedRoom = allRooms.find(room => {
      return room.number === booking.roomNumber
    })
    booking.bookedRoom = matchedRoom;
  })
}

getTotalRoomsAvailableToday() {
  let today = moment().format("YYYY/MM/DD");
  let totalRooms = 25;
  let totalBookingsForToday = 0;
  this.bookings.forEach(booking => {
    if(booking.date === today) {
      totalBookingsForToday++;
    }
  })
  return totalRooms - totalBookingsForToday;
}


calculateTotalRevenueForToday() {

  return this.todaysBookings.reduce((totalRevenue, booking) => {

    totalRevenue += booking.bookedRoom.costPerNight

    return totalRevenue
  },0)

}

findTodaysBookings() {
  let today = moment().format("YYYY/MM/DD");
  return  this.bookings.filter(booking => booking.date === today);

}


}

export default Manager

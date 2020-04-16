const moment = require("moment");

class Manager {
  constructor(allBookings, allRooms) {
    this.today = moment().format("YYYY/MM/DD");
    this.bookings = allBookings;
    this.addRoomsToBookings(allRooms)
    this.todaysBookings = this.findTodaysBookings()
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
  // let today = moment().format("YYYY/MM/DD");
  let totalRooms = 25;
  let totalBookingsForToday = 0;
  this.bookings.forEach(booking => {
    if(booking.date === this.today) {
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
  // let today = moment().format("YYYY/MM/DD");
  return  this.bookings.filter(booking => booking.date === this.today);
}



findPercentageOfRoomsOccupiedForToday() {
  return 100 - ((this.getTotalRoomsAvailableToday() / 25) * 100)
}


}

export default Manager

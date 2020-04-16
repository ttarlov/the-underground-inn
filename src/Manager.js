class Manager {
  constructor(allBookings, allRooms) {
    this.bookings = allBookings;
    this.roomsForToday = []
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

}

export default Manager

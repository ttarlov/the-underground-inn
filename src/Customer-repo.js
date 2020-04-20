import User from '../src/User';
import domUpdates from './dom-updates'

class CustomerRepo {
  constructor(allCustomers, allBookings, allRooms) {
    this.allRooms = allRooms
    this.bookings = allBookings;
    this.customers = allCustomers;
    this.addRoomsToBookings(allRooms);
    this.addBookingsToCustomers();
    this.bookableRooms = null;
    this.choosenDate = null;
  }

  getCustomerById(id) {
    return this.customers.find(customer => customer.id === id);

  }

  // instantiateCustomers(allCustomers) {
  //   return allCustomers.map(customer => {
  //   return  new Customer(customer);
  //   });
  // }

  addRoomsToBookings(allRooms) {
    this.bookings.forEach(booking => {
      let matchedRoom = allRooms.find(room => {
        return room.number === booking.roomNumber
      });
      booking.bookedRoom = matchedRoom;
    })
  }

  addBookingsToCustomers() {
    this.customers.forEach(customer => {
      customer.bookings = this.bookings.filter(booking => {
          return booking.userID === customer.id
        })
    })
  }

  getRoomsAvailableForGivenDate(date) {
    this.choosenDate = date;
    let bookedRooms = []

    this.bookings.forEach(booking => {
      if(booking.date === date) {
        bookedRooms.push(booking.roomNumber)
      }
    });

  let bookableRooms = this.allRooms.reduce((availableRooms, room)=> {

     if(!bookedRooms.includes(room.number)) {
       availableRooms.push(room)
     }

     return availableRooms
   },[]);
    // console.log("bookedRooms", bookedRooms);
    // console.log("BOOKABLE ROOMS", bookableRooms);
    this.bookableRooms = bookableRooms;
    domUpdates.showAvailableRooms(bookableRooms)
  return bookableRooms
}

  filterRoomsByType(selectedRoomType) {
      if(selectedRoomType === "all rooms") {
        domUpdates.showAvailableRooms(this.bookableRooms)
        return this.bookableRooms
      }
    // console.log(this.bookableRooms);
  let matchedRooms = this.bookableRooms.filter(room => {
    return  room.roomType === selectedRoomType
    })
    domUpdates.showAvailableRooms(matchedRooms);
    return matchedRooms
  }

}
export default CustomerRepo;

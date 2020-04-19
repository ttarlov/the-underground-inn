import User from '../src/User';

class CustomerRepo {
  constructor(allCustomers, allBookings, allRooms) {
    this.bookings = allBookings;
    this.customers = allCustomers;
    this.addRoomsToBookings(allRooms);
    this.addBookingsToCustomers();
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




}

export default  CustomerRepo;

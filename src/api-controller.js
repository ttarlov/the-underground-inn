class ApiController {
  constructor() {
    this.rootUrl = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904';
  }


getAllUsers(){
  let url = `${this.rootUrl}/users/users`;
  return fetch(url).then(response => response.json());
}

getAllRooms() {
  let url = `${this.rootUrl}/rooms/rooms`;
  return fetch(url).then(response => response.json());
}

getAllBookings() {
  let url = `${this.rootUrl}/bookings/bookings`;
  return fetch(url).then(response => response.json());
}


bookARoom(id, date, roomNumber) {

    let bookingRequestObj = {
      "userID": Number(id),
      "date": date,
      "roomNumber": Number(roomNumber)
    }
  let url = `${this.rootUrl}/bookings/bookings`;
  return fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(bookingRequestObj)
  })
  .then(response => console.log(response.json()))
  .catch(error => console.log(error.message));
}

deleteBooking(id) {
  let deleteBookingObj = {
    id: Number(id)
  }
  let url = `${this.rootUrl}/bookings/bookings`;
  return fetch(url, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(deleteBookingObj)
  })
  .then(response => console.log(response.json()))
  .catch(error => console.log(error.message));

}


}

export default ApiController;

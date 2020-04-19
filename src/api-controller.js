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


}

export default ApiController;

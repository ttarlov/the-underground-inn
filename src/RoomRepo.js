class RoomRepo {
  constructor(allRooms) {
    this.allRooms = allRooms;
  }


  getRoomsByRoomNumber(roomNumber) {
    return this.allRooms.filter(room => room.number === roomNumber);
  }


}
export default RoomRepo;

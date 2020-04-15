class RoomRepo {
  constructor(allRooms) {
    this.allRooms = allRooms;
  }


  getRoomsByRoomNumber(roomNumber) {
    return this.allRooms.filter(rooms => {
      room.number === roomNumber;
    })
  }


}
export default RoomRepo;

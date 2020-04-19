import chai from 'chai';
const expect = chai.expect;
import Room from '../src/Room';

describe('Room Class', function(){
  let room;
  let rooms;

  beforeEach(function(){

    rooms = [
      {
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
      },
      {
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
      },
    ];

    room = new Room(rooms[0])
  }); //before each closes

  it('should be a function', function(){
    expect(Room).to.be.a('function')
  });

  it('should be an instance of Room Class', function(){
    expect(room).to.be.an.instanceof(Room)
  });

  it('should initialize with number, roomType, bidet, bedSize, numBeds, costPerNight properties', function(){
    expect(room.number).to.eq(1)
    expect(room.roomType).to.eq("residential suite")
    expect(room.bidet).to.eq(true)
    expect(room.bedSize).to.eq("queen")
    expect(room.numBeds).to.eq(1)
    expect(room.costPerNight).to.eq(358.4)
  });


}); //main describe closes

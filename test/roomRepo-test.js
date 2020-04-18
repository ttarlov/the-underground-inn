import chai from 'chai';
const expect = chai.expect;
import RoomRepo from '../src/RoomRepo';

describe('RoomRepo Class', function(){
  let roomRepo;
  let allRooms;

  beforeEach(function(){

    allRooms = [
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
      {
      "number": 3,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "king",
      "numBeds": 1,
      "costPerNight": 491.14
      },
      {
      "number": 4,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 429.44
      },
      {
      "number": 5,
      "roomType": "single room",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 2,
      "costPerNight": 340.17
      },
    ];



    roomRepo = new RoomRepo(allRooms)

  }); // before each closes here

  it('should be a function', function(){
    expect(RoomRepo).to.be.a('function')
  });

  it('should be an instance of Manager Class', function(){
    expect(roomRepo).to.be.an.instanceof(RoomRepo)
  });

  it('should initialize with all rooms', function(){
    expect(roomRepo.allRooms).to.deep.eq(allRooms)
  });

  it('should be able to to get a room by a room number', function(){
    expect(roomRepo.getRoomsByRoomNumber(3)).to.deep.eq([allRooms[2]]);
  });



}); //main describe block closes here

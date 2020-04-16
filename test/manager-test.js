import chai from 'chai';
const expect = chai.expect;
const moment = require("moment");

import Manager from '../src/Manager';
import Room from '../src/Room';
import Booking from '../src/Booking'

describe('Manager Class', function(){
  let manager;
  let rooms;
  let bookings;
  let today;
  let roomsArry;
  let bookingsArry;

beforeEach(function(){
  today = moment().format("YYYY/MM/DD")

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
    {
    "number": 3,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 491.14
    },
  ];

  bookings = [
    {
    "id": "5fwrgu4i7k55hl6sz",
    "userID": 9,
    "date": "2020/02/04",
    "roomNumber": 1,
    "roomServiceCharges": []
    },
    {
    "id": "5fwrgu4i7k55hl6t5",
    "userID": 43,
    "date": today,
    "roomNumber": 2,
    "roomServiceCharges": []
    },
    {
    "id": "5fwrgu4i7k55hl6t6",
    "userID": 13,
    "date": today,
    "roomNumber": 3,
    "roomServiceCharges": []
    },
  ];

  roomsArry = rooms.map(room => new Room(room))
  bookingsArry = bookings.map(booking => new Booking(booking))

  manager = new Manager(bookingsArry, roomsArry)
});




it('should be a function', function(){
  expect(Manager).to.be.a('function')
});

it('should be an instance of Manager Class', function(){
  expect(manager).to.be.an.instanceof(Manager)
});

it('should initialize with todays date property', function(){
  expect(manager.today).to.eq(today)
});


describe('addRoomsToBookings Method', function(){

  it('should add matching rooms to bookings', function(){
    expect(manager.bookings).to.deep.eq([
  {
    id: '5fwrgu4i7k55hl6sz',
    userID: 9,
    date: '2020/02/04',
    roomNumber: 1,
    roomServiceCharges: [],
    bookedRoom: {
      number: 1,
      roomType: 'residential suite',
      bidet: true,
      bedSize: 'queen',
      numBeds: 1,
      costPerNight: 358.4
    }
  },
  {
    id: '5fwrgu4i7k55hl6t5',
    userID: 43,
    date: today,
    roomNumber: 2,
    roomServiceCharges: [],
    bookedRoom: {
      number: 2,
      roomType: 'suite',
      bidet: false,
      bedSize: 'full',
      numBeds: 2,
      costPerNight: 477.38
    }
  },
  {
    id: '5fwrgu4i7k55hl6t6',
    userID: 13,
    date: today,
    roomNumber: 3,
    roomServiceCharges: [],
    bookedRoom: {
      number: 3,
      roomType: 'single room',
      bidet: false,
      bedSize: 'king',
      numBeds: 1,
      costPerNight: 491.14
    }
  }
])
  });
});

  describe('getTotalRoomsAvailableToday Method', function(){

    it('should get available rooms for today', function(){
      expect(manager.getTotalRoomsAvailableToday()).to.eq(23)
    });

  });

  describe('calculateTotalRevenueForToday', function(){

    it('should be able to calculate total revenue for today', function(){
      expect(manager.calculateTotalRevenueForToday()).to.eq(968.52)

    });

    describe('findTodaysBookings Method', function(){
      it('should find all bookings for today', function(){
        expect(manager.todaysBookings).to.deep.eq([
            {
              id: '5fwrgu4i7k55hl6t5',
              userID: 43,
              date: '2020/04/16',
              roomNumber: 2,
              roomServiceCharges: [],
              bookedRoom: {
                number: 2,
                roomType: 'suite',
                bidet: false,
                bedSize: 'full',
                numBeds: 2,
                costPerNight: 477.38
              }
            },
            {
              id: '5fwrgu4i7k55hl6t6',
              userID: 13,
              date: '2020/04/16',
              roomNumber: 3,
              roomServiceCharges: [],
              bookedRoom: {
                number: 3,
                roomType: 'single room',
                bidet: false,
                bedSize: 'king',
                numBeds: 1,
                costPerNight: 491.14
              }
            }
          ])
      });
    });
  });

  describe('findPercentageOfRoomsOccupiedForToday Method', function(){

    it('should calculate percentage of rooms occuped for today', function(){
      console.log(manager.findPercentageOfRoomsOccupiedForToday());
    });


  });



}); // Main describe block closes here

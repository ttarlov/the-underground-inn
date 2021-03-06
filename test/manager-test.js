import chai from 'chai';
const expect = chai.expect;
const moment = require("moment");
const spies = require("chai-spies");
chai.use(spies);
import domUpdates from "../src/dom-updates.js";


import Manager from '../src/Manager';
import Room from '../src/Room';
import Booking from '../src/Booking';
import User from '../src/User'

describe('Manager Class', function(){
  let manager;
  let rooms;
  let bookings;
  let today;
  let roomsArry;
  let bookingsArry;
  let allUsers;
  let usersArray

  afterEach(() => {
    chai.spy.restore(domUpdates);
  });

beforeEach(function(){

  chai.spy.on(domUpdates, "showAvailableRoomsTodayCard", () => {});
  chai.spy.on(domUpdates, "showTotalRevenueForToday", () => {});
  chai.spy.on(domUpdates, "showPecentageOfRoomsOccupied", () => {});

  today = moment().format("YYYY/MM/DD");

  allUsers = [
    {
    "id": 1,
    "name": "Leatha Ullrich"
    },
    {
    "id": 2,
    "name": "Rocio Schuster"
    },
    {
    "id": 3,
    "name": "Kelvin Schiller"
    },
  ];


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
  usersArray = allUsers.map(user => new User(user))

  manager = new Manager(usersArray, bookingsArry, roomsArry)
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
      expect(domUpdates.showAvailableRoomsTodayCard).to.have.been.called(1)
      expect(domUpdates.showAvailableRoomsTodayCard).to.have.been.called.with(23)
    });

  });

  describe('calculateTotalRevenueForToday', function(){

    it('should be able to calculate total revenue for today', function(){
      expect(manager.calculateTotalRevenueForToday()).to.eq(968.52)
      expect(domUpdates.showTotalRevenueForToday).to.have.been.called(1)
      expect(domUpdates.showTotalRevenueForToday).to.have.been.called.with("968.52")
    });

    describe('findTodaysBookings Method', function(){
      it('should find all bookings for today', function(){
        expect(manager.todaysBookings).to.deep.eq([
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
  });

  describe('findPercentageOfRoomsOccupiedForToday Method', function(){

    it('should calculate percentage of rooms occuped for today', function(){
      expect(manager.findPercentageOfRoomsOccupiedForToday()).to.eq(8)
      expect(domUpdates.showPecentageOfRoomsOccupied).to.have.been.called(1)
      expect(domUpdates.showPecentageOfRoomsOccupied).to.have.been.called.with(8)
    });


  });



}); // Main describe block closes here

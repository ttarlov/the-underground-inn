import chai from 'chai';
const expect = chai.expect;
import CustomerRepo from '../src/Customer-repo';
import User from '../src/User'
import Booking from '../src/Booking'
import Room from '../src/Room'

const spies = require("chai-spies");
chai.use(spies);
import domUpdates from "../src/dom-updates.js";


describe('Customer Repo Class', function(){
  let allRooms;
  let allUsers;
  let allBookings;
  let bookingsArry;
  let roomsArry;
  let customerRepo;
  let userArry

  afterEach(() => {
    chai.spy.restore(domUpdates);
  });



  beforeEach(function(){

    chai.spy.on(domUpdates, "showAvailableRooms", () => {});


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
      "number": 8,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "king",
      "numBeds": 1,
      "costPerNight": 650
      },
    ];

    allBookings = [
      {
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 1,
      "date": "2020/02/04",
      "roomNumber": 1,
      "roomServiceCharges": []
      },
      {
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 2,
      "date": "2020/01/24",
      "roomNumber": 2,
      "roomServiceCharges": []
      },
      {
      "id": "5fwrgu4i7k55hl6t6",
      "userID": 3,
      "date": "2020/01/10",
      "roomNumber": 3,
      "roomServiceCharges": []
      },
    ];

userArry = allUsers.map(user => new User(user))
bookingsArry = allBookings.map(booking => new Booking(booking));
roomsArry = allRooms.map(room => new Room(room));
customerRepo = new CustomerRepo(userArry, allBookings, allRooms)

}); //beforeEach closes


it ('should be a function', function(){
  expect(CustomerRepo).to.be.a('function');
});

it('should be an instance of CustomerRepo Class', function(){
  expect(customerRepo).to.be.an.instanceof(CustomerRepo);
});

it('should initialize with a list of customers', function(){

  expect(customerRepo.customers).to.deep.eq([
  { id: 1, name: 'Leatha Ullrich', bookings: [
  {
    id: '5fwrgu4i7k55hl6sz',
    userID: 1,
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
  }
] },
  { id: 2, name: 'Rocio Schuster', bookings: [
  {
    id: '5fwrgu4i7k55hl6t5',
    userID: 2,
    date: '2020/01/24',
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
  }
]
 },
  { id: 3, name: 'Kelvin Schiller', bookings: [
  {
    id: '5fwrgu4i7k55hl6t6',
    userID: 3,
    date: '2020/01/10',
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
] }
])
});

describe('getCustomerById Method', function(){
  it('should be able to get a customer by ID', function(){
    expect(customerRepo.getCustomerById(5)).to.deep.eq(allUsers[4])
  });

});

describe('addRoomsToBookings method', function(){

  it('should add matching rooms to bookings', function(){
    expect(customerRepo.bookings).to.deep.eq([
      {
        id: '5fwrgu4i7k55hl6sz',
        userID: 1,
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
        userID: 2,
        date: '2020/01/24',
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
        userID: 3,
        date: '2020/01/10',
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

describe('getRoomsAvailableForGivenDate Method', function(){
  it('should get available rooms for given date', function(){
    expect(customerRepo.getRoomsAvailableForGivenDate('2020/01/24')).to.deep.eq([
  {
    number: 1,
    roomType: 'residential suite',
    bidet: true,
    bedSize: 'queen',
    numBeds: 1,
    costPerNight: 358.4
  },
  {
    number: 3,
    roomType: 'single room',
    bidet: false,
    bedSize: 'king',
    numBeds: 1,
    costPerNight: 491.14
  },
  {
    number: 8,
    roomType: 'single room',
    bidet: false,
    bedSize: 'king',
    numBeds: 1,
    costPerNight: 650
  }
]);
  expect(domUpdates.showAvailableRooms).to.have.been.called(1)
  expect(domUpdates.showAvailableRooms).to.have.been.called.with([
{
  number: 1,
  roomType: 'residential suite',
  bidet: true,
  bedSize: 'queen',
  numBeds: 1,
  costPerNight: 358.4
},
{
  number: 3,
  roomType: 'single room',
  bidet: false,
  bedSize: 'king',
  numBeds: 1,
  costPerNight: 491.14
},
{
  number: 8,
  roomType: 'single room',
  bidet: false,
  bedSize: 'king',
  numBeds: 1,
  costPerNight: 650
}
])
  });

});

describe('filterRoomsByType Method', function(){

  it('should filter rooms based on the type', function(){
    customerRepo.getRoomsAvailableForGivenDate('2020/01/24');
    expect(customerRepo.filterRoomsByType("single room")).to.deep.eq([
  {
    number: 3,
    roomType: 'single room',
    bidet: false,
    bedSize: 'king',
    numBeds: 1,
    costPerNight: 491.14
  },
  {
    number: 8,
    roomType: 'single room',
    bidet: false,
    bedSize: 'king',
    numBeds: 1,
    costPerNight: 650
  }
]);
expect(domUpdates.showAvailableRooms).to.have.been.called(2)
expect(domUpdates.showAvailableRooms).to.have.been.called.with([
{
number: 3,
roomType: 'single room',
bidet: false,
bedSize: 'king',
numBeds: 1,
costPerNight: 491.14
},
{
number: 8,
roomType: 'single room',
bidet: false,
bedSize: 'king',
numBeds: 1,
costPerNight: 650
}
]);
  });

});








}); // main describe block closes

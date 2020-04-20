import chai from 'chai';
const expect = chai.expect;
const moment = require("moment");
const spies = require("chai-spies");
chai.use(spies);

import Customer from '../src/Customer';
import User from '../src/User';
import CustomerRepo from '../src/Customer-repo'
import ApiController from '../src/api-controller'
import domUpdates from "../src/dom-updates.js";

describe('Customer Class', function(){
  let user;
  let customer;
  let customerRepo;
  let allUsers;
  let allRooms;
  let allBookings;
  let today;

  afterEach(() => {
    chai.spy.restore(domUpdates);
  });


    beforeEach(function(){

      chai.spy.on(domUpdates, "showPastBookings", () => {});
      chai.spy.on(domUpdates, "showBookingsForToday", () => {});
      chai.spy.on(domUpdates, "showFutureBookings", () => {});
      chai.spy.on(domUpdates, "showAmountSpentOnRooms", () => {});

      today = moment().format("YYYY/MM/DD")
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
      ];

      allBookings = [
        {
        "id": "5fwrgu4i7k55hl6sz",
        "userID": 1,
        "date": "2022/02/04",
        "roomNumber": 1,
        "roomServiceCharges": []
        },
        {
        "id": "5fwrgu4i7k55hl6t5",
        "userID": 1,
        "date": "2020/01/24",
        "roomNumber": 2,
        "roomServiceCharges": []
        },
        {
        "id": "5fwrgu4i7k55hl6t6",
        "userID": 1,
        "date": "2020/01/10",
        "roomNumber": 3,
        "roomServiceCharges": []
        },
        {
        "id": "5fwrgu9i7k55hl6sz",
        "userID": 1,
        "date": "2022/02/15",
        "roomNumber": 3,
        "roomServiceCharges": []
        },
        {
        "id": "5fwrga9i7k55hl6sz",
        "userID": 1,
        "date": today,
        "roomNumber": 3,
        "roomServiceCharges": []
        },
      ];

      customerRepo = new CustomerRepo(allUsers, allBookings, allRooms)
      customer = new Customer(customerRepo.getCustomerById(1))


    }); //Before Each ends here


  it('should initialize with id, name', function(){
     expect(customer.id).to.eq(1)
     expect(customer.name).to.eq('Leatha Ullrich')
  });

  it('should initialize with personal bookings', function(){
    expect(customer.bookings).to.deep.eq([
  {
    id: '5fwrgu4i7k55hl6sz',
    userID: 1,
    date: '2022/02/04',
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
    userID: 1,
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
    userID: 1,
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
  },
  {
    id: '5fwrgu9i7k55hl6sz',
    userID: 1,
    date: '2022/02/15',
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
  },
  {
    id: '5fwrga9i7k55hl6sz',
    userID: 1,
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

  it('should initialize with ApiController in constructor', function(){
      expect(customer.apiController).to.be.an.instanceof(ApiController)
  });


describe('findPastBookings Method', function(){

  it('should find all past bookings', function(){
    expect(customer.findPastBookings()).to.deep.eq([
  {
    id: '5fwrgu4i7k55hl6t5',
    userID: 1,
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
    userID: 1,
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
  },
  {
    id: '5fwrga9i7k55hl6sz',
    userID: 1,
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
]
)
expect(domUpdates.showPastBookings).to.have.been.called(1);
expect(domUpdates.showPastBookings).to.have.been.called.with([
{
id: '5fwrgu4i7k55hl6t5',
userID: 1,
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
userID: 1,
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
},
{
id: '5fwrga9i7k55hl6sz',
userID: 1,
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

describe('findBookingsForToday Method', function(){
  it('should find all bookings for today', function(){
    expect(customer.findBookingsForToday()).to.deep.eq([
      {
        id: '5fwrga9i7k55hl6sz',
        userID: 1,
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
    ]);
    expect(domUpdates.showBookingsForToday).to.have.been.called(1);
    expect(domUpdates.showBookingsForToday).to.have.been.called.with([
      {
        id: '5fwrga9i7k55hl6sz',
        userID: 1,
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
    ]);
  });
});

describe('findFutureBookings Method', function(){
  it('should find all future bookings', function(){
    expect(customer.findFutureBookings()).to.deep.eq([
      {
        id: '5fwrgu4i7k55hl6sz',
        userID: 1,
        date: '2022/02/04',
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
        id: '5fwrgu9i7k55hl6sz',
        userID: 1,
        date: '2022/02/15',
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
    ]);
    expect(domUpdates.showFutureBookings).to.have.been.called(1);
    expect(domUpdates.showFutureBookings).to.have.been.called.with([
      {
        id: '5fwrgu4i7k55hl6sz',
        userID: 1,
        date: '2022/02/04',
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
        id: '5fwrgu9i7k55hl6sz',
        userID: 1,
        date: '2022/02/15',
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
    ]);
  });

});

describe('calculateTotalAmountSpent Method', function(){
  it('should be able to calculate total amount spent on rooms', function(){
    expect(customer.calculateTotalAmountSpent()).to.eq("2309.20")
    expect(domUpdates.showAmountSpentOnRooms).to.have.been.called(1)
    expect(domUpdates.showAmountSpentOnRooms).to.have.been.called.with("Leatha Ullrich", "2309.20")
  });
});



}); //main describe block ends here

import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/Customer';
import User from '../src/User';
import CustomerRepo from '../src/Customer-repo'


describe('Customer Class', function(){
  let user;
  let customer;
  let customerRepo;
  let allUsers;
  let allRooms;
  let allBookings;

    beforeEach(function(){
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
  }
])
  });

describe('findPastBookings Method', function(){

  it.only('should find all past bookings', function(){
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
  }
]
)
  });

});


}); //main describe block ends here

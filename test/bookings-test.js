import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/Booking';

describe('Booking Class', function(){
  let booking;
  let bookings;

  beforeEach(function(){
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
      "date": "2020/02/09",
      "roomNumber": 2,
      "roomServiceCharges": []
      },
    ];



    booking = new Booking(bookings[0])

  }); // before each closes here

  it('should be a function', function(){
    expect(Booking).to.be.a('function')
  });

  it('should be an instance of Booking Class', function(){
    expect(booking).to.be.an.instanceof(Booking)
  });

  it('should initialize with id, userID, date, roomNumber, roomServiceCharges properties', function(){
    expect(booking.id).to.eq("5fwrgu4i7k55hl6sz")
    expect(booking.userID).to.eq(9)
    expect(booking.date).to.eq("2020/02/04")
    expect(booking.roomNumber).to.eq(1)
    expect(booking.roomServiceCharges).to.deep.eq([])
  });


}); //main describe block closes here

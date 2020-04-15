import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/Booking';

describe('Booking Class', function(){
  let booking;

  beforeEach(function(){
    booking = new Booking()

  }); // before each closes here

  it('should be a function', function(){
    expect(Booking).to.be.a('function')
  });

  it('should be an instance of Manager Class', function(){
    expect(booking).to.be.an.instanceof(Booking)
  });


}); //main describe block closes here

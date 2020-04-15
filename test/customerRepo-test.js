import chai from 'chai';
const expect = chai.expect;
import CustomerRepo from '../src/Customer-repo';
import Customer from '../src/Customer'


describe('Customer Class', function(){
  let customerRepo;
  let customer;
  let allCustomers;

  beforeEach(function(){
    allCustomers = [{
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
      {
      "id": 4,
      "name": "Kennedi Emard"
      },
      {
      "id": 5,
      "name": "Rhiannon Little"
      },
      {
      "id": 6,
      "name": "Fleta Schuppe"
      },
      {
      "id": 7,
      "name": "Dell Rath"
      },
      {
      "id": 8,
      "name": "Era Hand"
      },
      {
      "id": 9,
      "name": "Faustino Quitzon"
      },
      {
      "id": 10,
      "name": "Tony Armstrong"
      },
];

customerRepo = new CustomerRepo(allCustomers)

}); //beforeEach closes


it ('should be a function', function(){
  expect(CustomerRepo).to.be.a('function');
});

it('should be an instance of CustomerRepo Class', function(){
  expect(customerRepo).to.be.an.instanceof(CustomerRepo);
});

it('should initialize with a list of customers', function(){
  expect(customerRepo.customers).to.deep.eq(allCustomers)
});

describe('getCustomerById Method', function(){
  it('should be able to get a customer by ID', function(){
    expect(customerRepo.getCustomerById(5)).to.deep.eq(allCustomers[4])
  });

});








}); // main describe block closes

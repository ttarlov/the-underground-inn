import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';
import CustomerRepo from '../src/Customer-repo';

describe('Customer Class', function(){
  let customer;
  let customerRepo;
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

  customerRepo = new CustomerRepo(allCustomers);
  customer = new Customer(customerRepo.getCustomerById(7))

}); // beforeEach closes

it ('should be a function', function(){
  expect(Customer).to.be.a('function');
});

it('should be an instance of CustomerRepo Class', function(){
  expect(customer).to.be.an.instanceof(Customer);
});

it('should initialize with name and id', function(){
  expect(customer.id).to.eq(7);
  expect(customer.name).to.eq("Dell Rath");
});







});// main describe block closes

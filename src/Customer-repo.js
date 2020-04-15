import Customer from '../src/Customer';

class CustomerRepo {
  constructor(allCustomers) {
    this.customers = this.instantiateCustomers(allCustomers);
  }

  getCustomerById(id) {
    return this.customers.find(customer => customer.id === id);
  }

  instantiateCustomers(allCustomers) {
    return allCustomers.map(customer => {
    return  new Customer(customer);
    });
  }

}

export default  CustomerRepo;

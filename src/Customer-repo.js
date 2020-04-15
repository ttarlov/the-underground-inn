class CustomerRepo {
  constructor(allCustomers) {
    this.customers = allCustomers;
  }

  getCustomerById(id) {
    return this.customers.find(customer => customer.id === id);
  }
}
module.exports = CustomerRepo;

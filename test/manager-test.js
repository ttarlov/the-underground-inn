import chai from 'chai';
const expect = chai.expect;

import Manager from '../src/Manager';


describe('Manager Class', function(){
  let manager;
beforeEach(function(){
  manager = new Manager()
});




it('should be a function', function(){
  expect(Manager).to.be.a('function')
});

it('should be an instance of Manager Class', function(){
  expect(manager).to.be.an.instanceof(Manager)
});



}); // Main describe block closes here

import chai from 'chai';
const expect = chai.expect;

import User from '../src/User';

describe('User Class', function(){
  let user;
  let allUsers;

 beforeEach(function(){
   allUsers = [{
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

  user = new User(allUsers[0])

}); // beforeEach closes

it ('should be a function', function(){
  expect(User).to.be.a('function');
});

it('should be an instance of CustomerRepo Class', function(){
  expect(user).to.be.an.instanceof(User);
});

it('should initialize with name and id', function(){
  expect(user.id).to.eq(1);
  expect(user.name).to.eq("Leatha Ullrich");
});







});// main describe block closes

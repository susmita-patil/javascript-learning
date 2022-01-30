'use strict';

//default parameters in function
/*
const createBooking = function (
  flight,
  numPasseneger = 1,
  price = 100 * numPasseneger
) {
  //ES5
  //   numPasseneger = numPasseneger || 1;
  //   price = price || 100;
  const booking = {
    flight,
    numPasseneger,
    price,
  };
  console.log(booking);
};

createBooking('LM324', 5, 200);
createBooking('LM324', undefined, 200);
createBooking('LM324', 5);
createBooking('LM324');
*/

//primitives and objects in function
/*
const flight = 'LM29';
const jonas = {
  name: 'Jonas Schetdmann',
  passport: 1578921256,
};

const checkIn = function (flightNo, passenger) {
  flightNo = 'LM789';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1578921256) {
    alert('Checked in');
  } else {
    alert('wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
*/

//function that accepts function as argument

/*
//callback functions
const oneWord = function (str) {
  return str.replace(/ /g, '');
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join('');
};

//Higher order function
const transform = function (str, fun) {
  console.log(`Original string :${str}`);
  console.log(`Transformed string :${fun(str)}`);
  console.log(`Transformed By function : ${fun.name}`);
};

transform('Susmita patil is working in TCS', oneWord);
transform('Susmita patil is working in TCS', upperFirstWord);

const high5 = function () {
  console.log('👌');
};
document.body.addEventListener('click', high5);
*/

//function that return another function
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingFunction = greet('Hello');
greetingFunction('Susmita');

greet('Hiii')('SMital');

//Using Arrow function
const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};
const greetingFunction = greet('Hello');
greetingFunction('Susmita');

greet('Hiii')('SMital');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('GM')('SMital');
*/

//Call and apply method
/*
const AirIndia = {
  airline: 'AirIndia',
  iatacode: 'AI',
  bookings: [],

  //book:function(){}
  book(flightNo, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode} ${flightNo}`
    );

    this.bookings.push(`Flight: ${this.iatacode} ,Seat:${flightNo} , ${name}`);
  },
};

AirIndia.book(629, 'Susmita');
AirIndia.book(296, 'Smital');
console.log(AirIndia.bookings);

const SpiceJet = {
  airline: 'SpiceJet',
  iatacode: 'SP',
  bookings: [],
};

//Call Method
const book = AirIndia.book;
//book(258, 'Patil'); //undefined bcoz of this keyword
book.call(AirIndia, 258, 'Susmita Patil'); //this keyword points to first argument of call method
console.log(AirIndia);

book.call(SpiceJet, 123, 'Jonas');
console.log(SpiceJet);

const Star = {
  airline: 'Star',
  iatacode: 'ST',
  bookings: [],
};
book.call(Star, 987, 'Smital Patil');

//Apply Method
const flightData = [654, 'Shobha Patil'];
book.apply(Star, flightData); //array method receives 2nd argument as array

book.call(Star, ...flightData);
console.log(Star);

//bind method

const bookAI = book.bind(AirIndia);
const bookSP = book.bind(SpiceJet);
const bookST = book.bind(Star);

bookAI(26, 'Sush');
bookSP(29, 'SushSmit');

const bookSP29 = book.bind(SpiceJet, 29); //set one argument
bookSP29('Sushmi');

// console.log(SpiceJet);
// console.log(AirIndia);

//With event handlers
AirIndia.planes = 629;
AirIndia.BuyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//document.querySelector('.buy').addEventListener('click', AirIndia.BuyPlanes);//this keyword points to buy button
AirIndia.BuyPlanes();
document
  .querySelector('.buy')
  .addEventListener('click', AirIndia.BuyPlanes.bind(AirIndia));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

const addTaxRate = function (rate) {
  return value => value + value * rate;
};

// console.log(addTaxRate(0.23)(100));

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
*/

//Closure
//Example 1 reassigning function
/*
let f;
const g = function () {
  const a = 7;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
console.dir(f);

const h = function () {
  const b = 2;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();
console.dir(f);
*/

//Example 2 Timer

const boardPassengers = function (n, wait) {
  const perGroupPerson = n / 3;

  setTimeout(function () {
    console.log(
      `We will board with ${n} passengers, ${perGroupPerson} persons in each group`
    );
  }, wait * 1000);

  console.log(`Will start boarding passengers in ${wait} sec`);
};

//const perGroupPerson = 10; closure has high priority than scope chain
boardPassengers(180, 3);

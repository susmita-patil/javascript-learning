'use strict';

//constructor function
/*
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this for methods
  //   const calcAge = function () {
  //     console.log(2022 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1990);
console.log(jonas);
const susmita = new Person('Susmita', 1995);
console.log(susmita);
const smital = new Person('Smital', 2001);
console.log(smital);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

jonas.calcAge();
susmita.calcAge();
smital.calcAge();

Person.hey = function () {
  console.log('Hello world 🥰');
  console.log(this); //constructor function
};

Person.hey();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //true

console.log(Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(susmita)); //true

//prototype is prototype of linked objects

Person.prototype.species = 'Homo Sapian';
console.log(smital.species, susmita.species);

console.log(susmita.hasOwnProperty('firstName')); //true
console.log(susmita.hasOwnProperty('species')); //false

const arr = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(arr.__proto__.__proto__.__proto__); //null
console.log(arr.__proto__.__proto__); //object.protogtype top of prototype chain

console.log(Array.prototype.__proto__);
console.log(Array.prototype === arr.__proto__); //true

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
*/
///////////////////////////////////////////
//ES6 Classes
/*
//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.fullName}`);
  }

  //set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
  }

  get fullName() {
    return this._fullName;
  }
  //static method
  static hey = function () {
    console.log('Hello world 🥰');
    console.log(this); //class
  };
}

// PersonCl.prototype.greet = function () {
//   console.log(`Hello ${this.firstName}`);
// };

PersonCl.hey(); //static method

const susmita = new PersonCl('Susmita', 1995);
susmita.calcAge();
susmita.greet();

const smital = new PersonCl('smital patil', 2001);
console.log(smital);
console.log(smital.fullName);
console.log(smital._fullName);

const smital1 = new PersonCl('smital', 2001);
console.log(smital1);
console.log(smital1.fullName); //undefined
console.log(smital1._fullName); //undefined

console.log(susmita.__proto__ === PersonCl.prototype);

//Getters and setters
//in objects,45,26

const account = {
  owner: 'Jonas',
  movements: [200, 50, 670, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); //300
account.latest = 90;
console.log(account.movements);
*/

//object.create
/*
const personProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jonas = Object.create(personProto);
jonas.init('Jonas', 1995);
jonas.calcAge();

console.log(jonas);
console.log(jonas.__proto__);
console.log(jonas.__proto__ == personProto); //true
*/

//////////////////////////////////////////////////////////
//Inheritance between classes using constructor function
/*
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
  //instance properties
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  Person.call(this, firstName, birthYear);
  this.course = course;
};

//linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`I am ${this.firstName} studying ${this.course}`);
};

const smit = new Student('Smital', 2001, 'Computer');
console.log(smit);
smit.introduce();
smit.calcAge();

console.log(smit.__proto__);
console.log(smit.__proto__.__proto__);

console.dir(Student.prototype.constructor); //person

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); //student

console.log(smit instanceof Student); //true
console.log(smit instanceof Person); //true
console.log(smit instanceof Object); //true
*/

//////////////////////////////////////////////////////////
//Inheritance between classes using ES6 Classes
/*
//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.fullName}`);
  }

  //set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
  }

  get fullName() {
    return this._fullName;
  }
  //static method
  static hey = function () {
    console.log('Hello world 🥰');
    console.log(this); //class
  };
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`I am ${this.fullName} ,studying ${this.course}`);
  }

  calcAge() {
    console.log(`I am ${2022 - this.birthYear} years old`);
  }
}

const sush = new StudentCl('Sush Patil', 1995, 'Electronics');
console.log(sush);
sush.greet();
sush.introduce();
sush.calcAge();

*/

//////////////////////////////////////////////////////////
//Inheritance between classes using object.create
/*
const personProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jonas = Object.create(personProto);
const studentProto = Object.create(personProto);

studentProto.init = function (firstName, birthYear, course) {
  personProto.init.call(this, firstName, birthYear);
  this.course = course;
};

studentProto.introduce = function () {
  console.log(`I am ${this.firstName} ,studying ${this.course}`);
};

const john = Object.create(studentProto);
john.init('John', 1995, 'computer');
john.calcAge();
john.introduce();
*/

///////////////////////////////////////////////////////
//class example for bankist
//Encapsulation
//1. Private fields
//2.private methods
//3.public fields
//4. public methods

class account {
  //3.public fields
  locale = navigator.language;

  //1.private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.currency = currency;
    this.#pin = pin;
    this.owner = owner;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Welcome to Bankist app ${this.owner}`);
  }

  //4. public methods
  getMovements() {
    return this.#movements;
  }

  deposit(mov) {
    this.#movements.push(mov);
    return this;
  }

  withdraw(mov) {
    this.deposit(-mov);
    return this;
  }

  //2.private methods
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('loan approved');
      return this;
    }
  }
  static helper() {
    console.log('helper static method');
  }
}

const acc1 = new account('Jonas', 'EURO', 1111);
acc1.deposit(300);
acc1.withdraw(100);
acc1.requestLoan(200);
console.log(acc1);
console.log(acc1.getMovements());
//console.log(acc1.#movements);//error
// console.log(acc1,#pin);
// console.log(acc1.approveLoan(100));//error

account.helper();

acc1.deposit(500).deposit(300).withdraw(600).requestLoan(2500).withdraw(800);
console.log(acc1.getMovements());

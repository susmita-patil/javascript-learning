'use strict';

/*
const CalcAge = function (birthyear) {
  const age = 2021 - birthyear;

  function printStr() {
    const str = `${firstName} is ${age} years old`;
    console.log(str);
  }
  printStr();
  if (age > 25) {
    const str2 = `${firstName} is ${age} years old, you should marry now`;
    console.log(str2);
  }

  return age;
};

console.log();

const firstName = 'Smital';
CalcAge(1995);

console.log(fun(2, 3));
console.log(funexp(2, 3));
console.log(funarrow(2, 3));

function fun(a, b) {
  return a + b;
}

var funexp = function (a, b) {
  return a + b;
};

var funarrow = (a, b) => a + b;

*/

//this keyword use

//console.log(this);

const CalcAge = function () {
  //console.log(this);
};
CalcAge();

const CalcAgeArrow = () => {
  //console.log(this);
};
CalcAgeArrow();

var year = 2000; //creates year property on window
const jonas = {
  year: 1995,
  calc: function () {
    console.log(this);
    console.log(this.year);

    //solution 1
    /*
    self = this;
    const selfFunc = function () {
      console.log(this); //undefined
      console.log(self); //jonas
    };
    selfFunc();
   */

    //solution 2 use arrow function as it will point to calcAge this keyword
    const selfFunc = () => {
      console.log(this); //undefined
    };
    selfFunc();
  },

  //arrow function points to window object
  calcArrow: () => {
    console.log(this);
    console.log(this.year); //this will point to year property created by var on window
  },
};

jonas.calc();
jonas.calcArrow();

// const susmita = {
//   year: 2020,
// };

// susmita.calc = jonas.calc;
// susmita.calc();

// const f = jonas.calc;
// f();

//arguments keyword works in regular function & expression but do not work in arrow function
/*

var funexp = function (a, b) {
  console.log(arguments);
  return a + b;
};

var funarrow = (a, b) => {
  console.log(arguments);//cannot use
  return a + b;
};

console.log(funexp(2, 3));
console.log(funarrow(2, 3));
*/

const susmita = {
  fname: 'sush',
  year: 2020,
  arr: ['abc', 'def'],
};

const susmitaCopy = Object.assign({}, susmita);
console.log(susmita);
console.log(susmitaCopy);

susmitaCopy.fname = 'smital';
susmitaCopy.arr.push('xyz'); //changes in susmita also

console.log(susmita);
console.log(susmitaCopy);

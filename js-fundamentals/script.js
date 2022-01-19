"use strict";

// Function Declarations vs. Expressions
/*
// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);
  
  
  ///////////////////////////////////////
  // Arrow functions
  
  const calcAge3 = birthYeah => 2037 - birthYeah;
  const age3 = calcAge3(1991);
  console.log(age3);
  
  const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));
  
*/

/*
  // Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
*/

/*
// Introduction to Objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };

  console.log(jonas.firstName);
  console.log(jonas['firstName']);

   const nameKey='Name';
   console.log(jonas['last' + nameKey]);

   console.log(`${jonas.firstName} has ${jonas.friends.length} friends and ${jonas.friends[0]} is his best frnd.`)

*/

/*

//functions inside objects

   const jonas2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear:1995,
   
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasLicense:false,

    // calcAge: function (birthYear){
    //   return 2021-birthYear;
    // }

    // calcAge: function (){
    //   return 2021-this.birthYear;
    // }

    calcAge: function (){
     
      this.age = 2021-this.birthYear;
      return this.age;
    },

  // challenge
    getSummary:function (){
      let str;
      if(this.hasLicense)
      {
       str=`${this.firstName} ia a ${this.calcAge()} years old ${this.job} and he has driving licence.`
      }
      else{
        str=`${this.firstName} ia a ${this.calcAge()} years old ${this.job} and he has no driving licence.`
      }
      
      return str;
    }

  };

  console.log(jonas2);
  // console.log(jonas2.calcAge(1995));
  // console.log(jonas2['calcAge'](1995));

  // console.log(jonas2.calcAge());

  console.log(jonas2.age);

  console.log(jonas2.getSummary());

  */

/*
  //challenge 

const John={
  fullName:'John Smith',
  mass:78,
  height:1.69,

  calcBMI:function(){
    return this.mass/this.height**2;
  }
};
const Mark={
  fullName:'Mark Miller',
  mass:92,
  height:1.95,

  calcBMI:function(){
    return this.mass/this.height**2;
  }
};

if(John.calcBMI()>Mark.calcBMI())
{
  console.log(`${John.fullName} BMI(${John.calcBMI()}) is higher than ${Mark.fullName} (${Mark.calcBMI()})`);
}
else if (Mark.calcBMI()>John.calcBMI())
{
  console.log(`${Mark.fullName} BMI(${Mark.calcBMI()}) is higher than ${John.fullName} (${John.calcBMI()})`);
}

*/

/*
//Loops

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];

  const typeArray=[];
  for(let i=0;i<jonasArray.length;i++)
  {
    console.log(jonasArray[i]);
    // typeArray[i]=typeof jonasArray[i];

    typeArray.push(typeof jonasArray[i]);
  }

  console.log(typeArray);

  console.log('-----only strings---');
  for(let i=0;i<jonasArray.length;i++)
  {
    if(typeof jonasArray[i] !=='string') 
    continue;
    console.log(jonasArray[i]);
  }

  console.log('-----break on numbers ---');
  for(let i=0;i<jonasArray.length;i++)
  {
    if(typeof jonasArray[i] ==='number') 
    break;
    console.log(jonasArray[i]);
  }

  */

/* While loop for random no
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
}
*/

/*
// challenge tip calculator

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const total = [];
for (let i = 0; i < bills.length; i++) {
  total[i] = bills[i] + tips[i];
}
console.log(total);
*/

// challenge tip calculator using loops

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];

const total = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}
console.log(tips, total);

const arrdata = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage(arrdata));
console.log(calcAverage(total));

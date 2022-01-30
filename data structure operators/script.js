'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //function
  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //passing objects destructed
  orderDelivery: function ({ time = 20, address, strIndex, mainindex }) {
    console.log(
      `${this.starterMenu[strIndex]} and ${this.mainMenu[mainindex]} will be deliveerted on  ${time} at ${address}`
    );
  },

  orderPasta: function (in1, in2, in3) {
    console.log(`your pasta with ${in1}, ${in2} and ${in3} is ready`);
  },

  orderPizza: function (mainInd, ...otherInd) {
    console.log(mainInd);
    console.log(otherInd);
  },

  //ES6 enhanced Object literal
  openingHours,
};

//Maps
/*
const question = new Map([
  ['question', 'which is best language'],
  [1, 'C'],
  [2, 'java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct answer'],
  [false, 'Try again'],
]);

console.log(question);

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//question quiz

console.log(question.get('question'));
//iterate maps
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
//const answer = Number(prompt('Your answer is'));
const answer = 3;
if (answer === question.get('correct')) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

//convert maps to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

*/

/*
const rest = new Map();
rest.set('name', 'Classico');
rest.set(1, 'jonas');
rest.set(2, 'susmita');

rest
  .set('category', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');
console.log(rest);
console.log(rest.get(true));
console.log(rest.get('name'));
const time = 25;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.size);
console.log(rest.has('open'));
rest.delete(2);
//rest.clear();

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/

//Sets
/*
const orderSet = new Set(['pasta', 'pizza', 'maggie', 'pasta', 'pasta']);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('pasta'));
console.log(orderSet.has('chienese'));
orderSet.add('dosa');
orderSet.delete('pasta');
// orderSet.clear();
console.log(orderSet);

const staff = ['waiter', 'manager', 'waiter', 'chef'];
//const staffUnique = new Set(staff);//sets
const staffUnique = [...new Set(staff)]; //array
console.log(staffUnique);

console.log(new Set('susmita').size);


*/
//looping over objects

/*
for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);


//properties
const properties = Object.keys(openingHours);
console.log(properties);

let openstr = `We are open on ${properties.length} days :`;

for (const day of properties) {
  openstr += `${day} ,`;
}
console.log(openstr);

//values
const values = Object.values(openingHours);
console.log(values);

//entire object
const entries = Object.entries(openingHours);
console.log(entries);

//[key,value]
for (const [key, { open, close }] of entries) {
  console.log(`On the ${key}, we open at ${open} and close at ${close}`);
}

*/

//optional chaining ? to check if it exists

/*
//console.log(restaurant.openingHours.mon.open); //error
console.log(restaurant.openingHours.mon?.open); //undefined
console.log(restaurant.openingHours?.fri?.open); //11

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekDays) {
  open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`${day} resto will open at ${open}`);
}

//methods
console.log(restaurant.orderFood?.(0, 1) ?? 'method not exist');

//Arrays

const users = [{ name: 'Jonas', email: 'susmita.tcs' }];
const users = [];
console.log(users[0]?.name ?? 'not exist');

*/

/*
//1) destructing
//spread as it is on right side of =
const arr = [1, 2, ...[3, 4]];

//rest as it is on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others); //3,4,5

const [pizza, pasta, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(otherFood);

//objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//functions
//rest
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(6, 2, 9);

const x = [6, 2, 9];
add(...x); //spread

restaurant.orderPizza('onion', 'tomato', 'chiliflakes', 'olive');


*/
//2)functions

//spread operator
/*
const arr = [4, 5, 6];
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'maggi'];
console.log(newMenu);

const ingredients = [
  // prompt('ingredient 1?'),
  // prompt('ingredient 2?'),
  // prompt('ingredient 3?'),
];
restaurant.orderPasta(...ingredients);

//objects

const newRestarant = { foundedIn: 1995, ...restaurant, place: 'pune' };
console.log(newRestarant);

const restCopy = { ...restaurant };
restCopy.place = 'sangli';
console.log(newRestarant.place);
console.log(restCopy.place);

*/
//Object destructing

/*
restaurant.orderDelivery({
  address: 'vita',
  //time: 12.5,
  strIndex: 2,
  mainindex: 0,
});
const { openingHours, starterMenu, categories } = restaurant;

console.log(openingHours);
console.log(starterMenu);
console.log(categories);

const {
  menu = [], //default value
  openingHours: hours = [],
  starterMenu: starters, //alternate names
  categories: menus,
} = restaurant;

console.log(menu);
console.log(hours);
console.log(starters);
console.log(menus);

let a = 29;
let b = 6;

const obj = {
  a: 23,
  b: 9,
  c: 5,
};
({ a, b } = obj);

console.log(a, b);

const {
  fri: { open, close },
} = openingHours;

console.log(open, close);

*/

//Array destructing
/*
const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(a, b, c);

let [main, , secondary] = restaurant.categories; //to take 1st and 3rd element from arry
console.log(main, secondary);

//switching variables

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, maincourse] = restaurant.orderFood(2, 1);
console.log(starter, maincourse);

//nested array
const nested = [2, 3, [5, 6]];

const [p, , q] = nested; //q=[5,6]
console.log(p, q);

const [x, , [y, z]] = nested;
console.log(x, y, z); //2,5,6

//default values
let [a1, b1, c1] = [8, 9]; //c1=undefined
console.log(a1, b1, c1);

[a1 = 1, b1 = 1, c1 = 1] = [8, 9]; 
console.log(a1, b1, c1); //c1=1


*/

// short circuiting or opeartor
/*
console.log(3 || 'susmia');
console.log(undefined || 0);
console.log(undefined || null);
console.log(null || undefined);
console.log('susmita' || null);
console.log(undefined || null || 0 || 'hello' || 5 || null);

//restaurant.numGuests = 29;
const guest11 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest11);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);


*/

//short circuting AND operator
/*
console.log(3 && null);
console.log(undefined && 'jonas');
console.log('jonas' && null);
console.log('jonas' && 3 && 's' && 29);

if (restaurant.orderPizza) {
  restaurant.orderPizza('onion', 'paneer');
}

restaurant.orderPizza && restaurant.orderPizza('onion', 'paneer');
*/

//nullish coalescing opeartor
//nullish: null undefined
/*
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests ?? 10;
console.log(guest2);
*/

//Logical operators

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'Satyam',
  owner: 'patil',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//rest1.owner = rest1.owner && '<anonymous>';
//rest2.owner = rest2.owner && '<anonymous>';

rest1.owner &&= '<anonymous>';
rest2.owner &&= '<anonymous>';

// console.log(rest1);
// console.log(rest2);

//for of loop
/*
for (const item of restaurant.starterMenu) {
  console.log(item);
}
const menu = [...restaurant.starterMenu];
for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}
*/

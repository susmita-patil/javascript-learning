//Strings lect 1
/*
const airline = 'TAP Air airlines';
const plane = 'sv29';
console.log(plane[0]);
console.log('Abcd'[1]);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Air'));

console.log(airline.slice(0, 3));
console.log(airline.slice(4));
console.log(airline.slice(0, airline.lastIndexOf(' ')));
console.log(airline.slice(4, -9));
console.log(airline.slice(-3));

const checkSeat = function (seat) {
  //B and E middle seats
  const r = seat.slice(-1);
  if (r === 'B' || r === 'E') {
    console.log('you got middle seat.😐');
  } else {
    console.log('you are lucky😊');
  }
};

checkSeat('29B');
checkSeat('6C');
checkSeat('629E');

*/

//strings lect 2
/*
const airline = 'TAP Air airlines';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const correct = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(correct);

//comparing email
const email = 'susmita.6@tcs.com';
const loginEmail = '  Susmita.6@tcs.com \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = '269,02E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'boarding at door 23, welcome to door 23';

console.log(announcement.replace('door', 'gate')); //only first door will replace
console.log(announcement.replace(/door/g, 'gate')); //all occurances

const plane = 'Air A320neo';
console.log(plane.includes('320'));
console.log(plane.startsWith('320'));
console.log(plane.startsWith('Air'));
*/

//strings lect 3
/*
//join and split
console.log('a+susmita+patil+nice+person'.split('+'));
console.log('jonas schedtmann'.split(' '));
const [fname, lname] = 'jonas schedtmann'.split(' ');
const newName = ['Mr.', fname, lname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const nameArray = name.split(' ');
  const newArray = [];
  for (const n of nameArray) {
    //newArray.push(n[0].toUpperCase() + n.slice(1));
    newArray.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(newArray.join(' '));
};

capitalizeName('susmita patil is an engineer');

const msg = 'go to school ';
console.log(msg.padStart(20, '*').padEnd(25, '*'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(165962303));
console.log(maskCreditCard('15648647862223354'));

console.log(msg.repeat(5));
*/

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//(11h25)
const strArray = flights.split('+');

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of strArray) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(47);
  console.log(output);
}

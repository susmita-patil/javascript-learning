'use strict';
// Data

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const accounts = [account1, account2, account3, account4];

// LECTURES

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr = [1, 2, 3, 4, 5, 6];
arr.fill(9, 3, 5);
console.log(arr);

const newArray = new Array(7); //empty array with 7 length
newArray.fill(5);
console.log(newArray);

//Array From

const arr2 = Array.from({ length: 7 }, () => 6);
console.log(arr2);

const arr3 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(arr3);

//Sorting array
/*
//strings
const strArray = ['sush', 'patil', 'smit', 'jonas'];
strArray.sort();
console.log(strArray);

//numbers
//returns < 0, if A,B keep order
//returns > 0 ,if B, A reverse order
//ascending order
// const sortedMovementsAsc = movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
const sortedMovementsAsc = movements.sort((a, b) => a - b);
console.log(sortedMovementsAsc);

//descending order
// const sortedMovementsDec = movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
const sortedMovementsDec = movements.sort((a, b) => b - a);
console.log(sortedMovementsDec);

*/

/*
//flat method
const arr = [[1, 2, 3], [4, 5], 6, 7, 8];
console.log(arr.flat());

const arrDeep = [[1, [2, 3]], [4, [1, [8, 9]], 5], 6, 7, 8];
console.log(arrDeep.flat(3));

//flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/

/*
//equality check and returns true or false
console.log(movements.includes(-130));

//condition check
//some method
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//every method
const allDeposits = account4.movements.every(mov => mov > 0);
console.log(allDeposits);

*/
/*
//Find method
const FirstWithdraw = movements.find(mov => mov < 0);
console.log(FirstWithdraw);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') console.log(acc);
}
*/
/*
//Map method
const CreateUsernames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

CreateUsernames(accounts);
console.log(accounts);


//Filter

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls);
*/

//reduce method
/*
//2nd argument is initial value of acc
const balance = movements.reduce(function (acc, value, i) {
  console.log(`iteration ${i}:${acc}`);
  return acc + value;
}, 0);

//const balance = movements.reduce((acc, value, i) => acc + value, 0);
console.log(balance);

const CalcMaxArray = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
// if (acc > mov) return acc;
// else return mov;

console.log(CalcMaxArray);

*/

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Practise Array Methods
/*
const arr = ['a', 'b', 'c', 'd', 'e'];

//slice
console.log(arr.slice(2));
console.log(arr);
console.log(arr.slice(-2));
console.log(arr.slice(2, 4));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//splice
//splice mutates original array
console.log(arr.splice(-1));
console.log(arr.splice(1, 2)); //2nd parameter is no of elements to delete
console.log(arr);

//reverse array
//reverse mutates the original array
const arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.reverse());
console.log(arr2);

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//join
const joinedArr = letters.join('-');
console.log(joinedArr);

//at method

const Array = [6, 29, 629];
console.log(Array.at(0));

//getting last element
console.log(Array.at(-1));
console.log(Array.at(Array.length - 1));
console.log(Array.splice(-1)[0]);
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for(const [i,mov] of movements.entries())
//looping over array
//foreach loop cannot use continue and break
movements.forEach(function (mov, index, array) {
  if (mov > 0) console.log(`Movement ${index + 1}: deposited money ${mov}`);
  else if (mov < 0)
    console.log(`Movement ${index + 1}: Withdraw money ${Math.abs(mov)}`);
});
*/

//Maps
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

//Sets
//key is same as value(so we can use only _)
const currenciesUnique = new Set(['RS', 'USD', 'EUR', 'RS', 'USD']);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${_} : ${value}`);
});

*/

//map method on array
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;
const movementsUSD = movements.map(function (value) {
  return value * euroToUSD;
});

const movementsUSDArrow = movements.map(value => value * euroToUSD);
console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDArrow);

const movementsDescription = movements.map(
  (mov, index) =>
    `Movement ${index + 1}: ${
      mov > 0 ? 'Deposit' : 'Withdraw'
    } money ${Math.abs(mov)}`
);
console.log(movementsDescription);

//using for of loop
const movementsUSDArray = [];
for (const mov of movements) {
  movementsUSDArray.push(mov * euroToUSD);
}
console.log(movementsUSDArray);
*/

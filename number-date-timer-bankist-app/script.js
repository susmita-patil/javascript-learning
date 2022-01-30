'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2021-05-08T14:11:59.604Z',
    '2022-01-09T17:01:17.194Z',
    '2022-01-12T23:36:17.929Z',
    '2022-01-15T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2022-01-02T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatDates = (curDate, locale) => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), curDate);
  if (daysPassed === 0) return 'Today';
  else if (daysPassed === 1) return 'Yesterday';
  else if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const year = curDate.getFullYear();
    // const month = `${curDate.getMonth() + 1}`.padStart(2, 0);
    // const date = ` ${curDate.getDate()}`.padStart(2, 0);
    // return `${date}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(curDate);
  }
};

//format currency

const FormatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

//displays movements deposit and withdraw
const displayMovements = function (acc, sort = false) {
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  containerMovements.innerHTML = '';
  movs.forEach(function (mov, index) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const curDate = new Date(acc.movementsDates[index]);
    const displayDate = formatDates(curDate, acc.locale);

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value"> ${FormatCurrency(
      mov,
      acc.locale,
      acc.currency
    )}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//displayMovements(account1.movements);

//calculate current balance from movements
const calcDisplayMovements = function (account) {
  account.balance = account.movements.reduce((acc, value) => acc + value);

  labelBalance.textContent = `${FormatCurrency(
    account.balance,
    account.locale,
    account.currency
  )} `;
  // labelBalance.textContent = `${account.balance.toFixed(2)} €`;
};

//calcDisplayMovements(account1.movements);

//displays summary of deposit, withdraw and interest
const calcDisplaySummary = function (account) {
  const TotalDeposits = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  // labelSumIn.textContent = `${TotalDeposits.toFixed(2)}€`;
  labelSumIn.textContent = `${FormatCurrency(
    TotalDeposits,
    account.locale,
    account.currency
  )}`;

  const TotalWithdraws = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  //labelSumOut.textContent = `${Math.abs(TotalWithdraws).toFixed(2)}€`;
  labelSumOut.textContent = `${FormatCurrency(
    Math.abs(TotalWithdraws),
    account.locale,
    account.currency
  )}`;

  const TotalInterests = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => interest >= 1) //add interest only if it is greater than 1
    .reduce((interest, deposit) => interest + deposit, 0);

  labelSumInterest.textContent = `${FormatCurrency(
    Math.abs(TotalInterests),
    account.locale,
    account.currency
  )}`;
  // labelSumInterest.textContent = `${Math.abs(TotalInterests).toFixed(2)}€`;
};
//calcDisplaySummary(account1.movements);

//to create usernames by taking only first letters of owner
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

//update all UI
const updateUI = function (currAcc) {
  //display balance
  calcDisplayMovements(currAcc);

  //display summary
  calcDisplaySummary(currAcc);

  //display movements
  displayMovements(currAcc);
};

const startLogoutTimer = function () {
  //set timer to 5 seconds
  let time = 120;

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //display remaining time after 1 second
    labelTimer.textContent = `${min}:${sec}`;

    //when timer is 0sec, stop timer,logout user

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    //decrese time by 1sec
    time--;
  };

  tick();
  //call timer every second
  const timer = setInterval(tick, 1000);

  return timer;
};
//event handlers
let currentAccount, timer;

// //fake account login always to trial
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//Login feature
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    //display UI and welcome msg
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date n time
    // const now = new Date();
    // const year = now.getFullYear();
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const date = ` ${now.getDate()}`.padStart(2, 0);
    // const hours = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${date}/${month}/${year}, ${hours}:${minutes}`;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: '2-digit',
      year: 'numeric',
      // weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    //clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    updateUI(currentAccount);
  }
});

//Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAccount);

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

//Request loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Math.floor(inputLoanAmount.value);
  const loanValid = currentAccount.movements.some(
    mov => mov >= loanAmount * 0.1
  );

  if (loanAmount > 0 && loanValid) {
    setTimeout(() => {
      currentAccount.movements.push(loanAmount);

      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);

      //reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});

//close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

//sort
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
//Numbers

console.log(23);
console.log('23');
console.log(0.1 + 0.2);

//convert string to number
console.log(Number('29'));
console.log(+'29');

//parsing
console.log(Number.parseInt('15'));
console.log(Number.parseInt('15px', 10)); //15
console.log(Number.parseFloat('15px')); //15
console.log(Number.parseFloat('15.5 rem')); //15.5

//check if value is NaN
console.log(Number.isNaN(23)); //F
console.log(Number.isNaN('23')); //F
console.log(Number.isNaN(+'23 px')); //T
console.log(Number.isNaN(23 / 0)); //F
console.log(Number.isNaN(23.0)); //F

console.log('isFinite');
//checking if value is number
console.log(Number.isFinite(23)); //T
console.log(Number.isFinite('23')); //F
console.log(Number.isFinite(+'23 px')); //F
console.log(Number.isFinite(23 / 0)); //F
console.log(Number.isFinite(23.0)); //T

//Numbers
console.log('Math functions');
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

console.log(Math.max(10, 18, 20, 2, 69, '89')); //89
console.log(Math.min(10, 18, 20, 2, 69, '89')); //2

//calculate circle area
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//random numbers
console.log(Math.trunc(Math.random() * 6) + 1);

const RandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(RandomInt(10, 15));

//rounding integers
console.log(Math.trunc(29.2)); //29
console.log(Math.trunc(29.9)); //29

console.log(Math.round(29.2)); //29
console.log(Math.round(29.9)); //30

console.log(Math.ceil(29.2)); //30
console.log(Math.ceil(29.9)); //30

console.log(Math.floor(29.2)); //29
console.log(Math.floor(29.9)); //29

console.log(Math.trunc(-29.9)); //-29
console.log(Math.floor(-29.9)); //-30

//rounding decimals
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(3)); //2.700
console.log((2.736).toFixed(2)); //2.74 string
console.log(+(2.736).toFixed(2)); //2.74 number

//numerical separators
const a = 2_960_045_000;
console.log(a);

const price = 15_00;
console.log(price);

const pi = 3.14_145;
console.log(pi);

//cannot use _ in case of converting string to number

console.log(Number('230_23')); //NaN
console.log(Number.parseInt('230_23')); //230
*/

//BigInt
/*
const huge = 14786223658966523558966n;
const num = 45;

//console.log(huge * num);//error
console.log(huge * BigInt(num)); //works

//console.log(Math.sqrt(16n));//error

console.log(20n > 15); //T
console.log(20n > '15'); //T
console.log(20n === 20); //F
console.log(20n == 20); //T
console.log(20n == '20'); //T
console.log(20n / 3n); //6n
console.log(18n / 3n); //6n

*/

//Reminder operator
/*
console.log(5 % 2);
const isEven = no => no % 2 === 0;
console.log(isEven(10));
console.log(isEven(25));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

*/

//Dates
/*
const now = new Date();
console.log(now);

console.log(new Date('Sun Jan 16 2022'));
console.log(new Date('November 19 2022'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2022, 9, 13, 6, 29));
console.log(new Date(0));
console.log(3 * 24 * 60 * 60 * 1000); //in milisecond
console.log(new Date(259200000)); //in milisecond

const future = new Date(2025, 10, 19, 6, 29);
console.log(future);
console.log(future.getFullYear());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getMonth());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(1763513940000));
console.log(Date(now));
future.setFullYear(2019);
console.log(future);
*/

/*
//calculate difference in 2 dates
const future = new Date(2025, 10, 19, 6, 29);
console.log(+future); //timestep in ms

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

console.log(calcDaysPassed(new Date(2022, 10, 19), new Date(2022, 9, 13)));
*/

//setTimeOut function
/*
setTimeout(() => console.log(`Here is your pizza`), 3000);
console.log('waiting...');

setTimeout(
  (ind1, ind2) => console.log(`Here is your pizza with ${ind1} and ${ind2}`),
  3000,
  'onion',
  'spinach'
);

const ingredients = ['onion', 'spinach'];
const pizzaTimer = setTimeout(
  (ind1, ind2) => console.log(`Here is your pizza with ${ind1} and ${ind2}`),
  3000,
  ...ingredients
);

if (ingredients.includes('onion')) clearTimeout(pizzaTimer);

*/
//setInterval function
/*
setInterval(() => {
  const now = new Date();

  console.log(now);
}, 1000);
*/

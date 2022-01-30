'use strict';
/*
console.log('Challenge 1');

// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.splice(1, 2);
  //console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (value, index) {
    if (value < 3) console.log(`Dog Number ${index + 1} is sill a puppy`);
    else
      console.log(
        `Dog Number ${index + 1} is an adult and is ${value} years old`
      );
  });
};

const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];
checkDogs(Julia, Kate);
*/

/*
console.log('Challenge 2');
const Julia = [5, 2, 4, 1, 15, 8, 3];
const Kate = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + 4 * dogAge
  );
  console.log(humanAges);

  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);

  const average =
    // adults.reduce((acc, value)=> acc + value, 0) / adults.length;
    adults.reduce((acc, value, i, arr) => acc + value / arr.length, 0);
  console.log(`Average : ${average}`);
};

calcAverageHumanAge(Julia);
calcAverageHumanAge(Kate);
*/

/*
console.log('Challenge 3');

const calcAverageHumanAgeArrow = dogAges => {
  return dogAges
    .map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
};

console.log(calcAverageHumanAgeArrow(Julia));
*/

console.log('Challenge 4');

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

//2.
const SarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  SarahDog.curFood > SarahDog.recommendedFood
    ? 'Eating too much'
    : 'Eating too little'
);
//console.log(SarahDog);

//3.

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(el => el.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(el => el.owners);

console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

//7.
const OkayDogs = dogs.filter(checkEatingOkay);
console.log(OkayDogs);

//8.
// sort it by recommended food
// portion in an ascending order

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const measureKelvin = function () {
  const measure = {
    type: 'temperature',
    unit: 'celcius',
    // value: Number(prompt('temp in celcius')),
    value: 10,
  };
  const temp = 273 + measure.value;
  return temp;
};

console.log(measureKelvin());

// Challenge print forecast

const arrtemp = [23, 6, 29, -1];
const ptintForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `...${arr[i]} degree celcius in  ${i + 1} days  `;
  }

  return str;
};

console.log(ptintForecast(arrtemp));

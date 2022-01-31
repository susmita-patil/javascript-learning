'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    const html = `
  <article class="country">
        <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('bharat');
getCountryData('japan');
getCountryData('usa');
*/

///////////////////////////////////////
//callback hell
/*
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} M people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryDataAndNeighbour = function (country) {
  //AJAX request to country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country data 1
    renderCountry(data);

    if (!data.borders) return;

    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX request to country 2
    const request1 = new XMLHttpRequest();
    request1.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request1.send();

    request1.addEventListener('load', function () {
      const data1 = JSON.parse(this.responseText);
      console.log(data1);

      //render country data 1
      renderCountry(data1, 'neighbour');
    });
  });
};

getCountryDataAndNeighbour('bharat');

*/

///////////////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} M people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
              </div>
        </article>
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

//Promises
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};

*/
//using arrow function
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
*/
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

//chaining promises
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok) throw new Error(`country not found ${response.status}`);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);

      if (!neighbour) throw new Error('neighbour not found ');
      //country2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
      //   return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => {
      console.log(response);

      if (!response.ok) throw new Error(`country not found ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 🔴`);
      console.error(`${err.message} 🔴`);
      renderError(`Something went wrong....${err.message} Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
*/

//working code
/*
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'country not found')
    .then(data => {
      if (data.status === 404) throw new Error('country not found ....');

      renderCountry(data[0]);

      if (!data[0].borders) throw new Error('No neighbour found ....');

      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found ');
      //country2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 🔴`);

      renderError(`Something went wrong....${err.message} Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('bharat');
});


*/

//promises and timer
/*
console.log('test start');
setTimeout(() => {
  console.log('0sec timer');
}, 0);
Promise.resolve('resoled promise').then(res => console.log(res));
console.log('test end');
*/

/*
//promises
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottery draw is in progress');
  setTimeout(function () {
    if (Math.random() > 0.5) resolve('You win 🥰');
    else reject(new Error('you lost 😐'));
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//promisifying settimeout

const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

//to avoid callback hell
wait(1)
  .then(() => {
    console.log('1 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 sec passed');
    return wait(1);
  });

Promise.resolve('resolved').then(x => console.log(x));
Promise.reject(new Error('problem')).catch(err => console.error(err));
*/

//promisifying geolocation API
/*
// navigator.geolocation.getCurrentPosition(
//   pos => console.log(pos),
//   err => console.log(err)
// );

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   pos => resolve(pos),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));
// console.log('Geolocation');

const whereAmI = function () {
  getPosition()
    .then(pos => {
      console.log(pos.coords);
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in city ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (res.status === 404) throw new Error('country not found ....');

      //country2
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`something went wrong : ${err.message}`));
};

// whereAmI(52.508, 13.381);
btn.addEventListener('click', whereAmI);
*/

//async and wait

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

/*
const whereAmI = async function (country) {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem in geocoding');
    // console.log(resGeo);
    const dataGeo = await json();
    // console.log(dataGeo);

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('country not found');
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(err);
  }
};

whereAmI('bharat');
console.log('executed before whereAmI');
*/

/*
const whereAmI = async function (country) {
  try {
    // const pos = await getPosition();
    // const { latitude: lat, longitude: lng } = pos.coords;

    // const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    // if (!resGeo.ok) throw new Error('Problem in geocoding');
    // // console.log(resGeo);
    // const dataGeo = await json();
    // // console.log(dataGeo);

    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    if (!res.ok) throw new Error('country not found');
    // console.log(res);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    return `You are in ${data[0].name}`;
  } catch (err) {
    //console.error(err);
    throw err;
  }
};

// console.log('1: Get country data');
// whereAmI('bhat')
//   .then(str => console.log(`2: ${str}`))
//   .catch(err => console.error(err))
//   .finally(() => console.log('3: completed execution'));

(async function () {
  try {
    console.log('1: Get country data');
    const res = await whereAmI('bharat');
    console.log(res);
  } catch (err) {
    console.error(err);
  }
  console.log('3: completed execution');
})();

*/

//print data of 3 countries
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data);
    console.log(data.map(d => d[0].capital));
    //data.forEach(cap => console.log(cap[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('bharat', 'japan', 'usa');
*/

//promise combinators
/*
//promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
    getJSON(`https://restcountries.com/v2/name/bharat`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request take too long'));
    }, sec * 1000);
  });
};

//fastest fulfilled promise
Promise.race([getJSON(`https://restcountries.com/v2/name/bharat`), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//all fulfilled and rejected promise
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('success 2'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//error if anyone rejects
Promise.all([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('success 2'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//first fulfilled promise
Promise.any([
  Promise.resolve('success any'),
  Promise.reject('error any'),
  Promise.resolve('success 2 any'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

  */

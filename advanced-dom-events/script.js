'use strict';

///////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');
const header = document.querySelector('header');

// Modal window

const openModal = function (e) {
  e.preventDafault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//smooth scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords);
  console.log(e.target.getBoundingClientRect());

  console.log('current scroll X/Y', window.pageXOffset, window.pageYOffset);

  console.log(
    'Viewport height width ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // window.scrollTo(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//operations
//tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //guard clause
  if (!clicked) return;

  //remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  //active tab
  clicked.classList.add('operations__tab--active');

  //active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// const HandleHover = function (e, opacity) {
const HandleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
      // if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = this;
    // logo.style.opacity = opacity;
  }
};
//Manu fade animation
// nav.addEventListener('mouseover', function (e) {
//   HandleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   HandleHover(e, 1);
// });

//passing argument to handler function
nav.addEventListener('mouseover', HandleHover.bind(0.5));
nav.addEventListener('mouseout', HandleHover.bind(1));

//Sticky navigation
/*
const initialCords = section1.getBoundingClientRect();
console.log(initialCords);

window.addEventListener('scroll', function () {
  if (window.scrollY > initialCords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

*/

//Sticky navigation intersection observer API
/*
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(section1);
*/
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const skickyOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(stickyNav, skickyOptions);

headerObserver.observe(header);

//reveal section

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const allSections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  // section.classList.add('section--hidden');//temp
  sectionObserver.observe(section);
});

//Lazy loading

const imageTargets = document.querySelectorAll('img[data-src]');
console.log(imageTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replace src with data-src

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  imageObserver.unobserve(entry.target);
};
const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imageTargets.forEach(img => imageObserver.observe(img));

//slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4)';
  // slider.style.overflow = 'visible';

  const gotoSlides = function (curSlide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  };

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}" ></button>`
      );
    });
  };

  const activateDots = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(function (dot) {
      dot.classList.remove('dots__dot--active');
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // slides.forEach((s, i) => {
  //   s.style.transform = `translateX(${100 * i}%)`;
  // });
  //0 100 200 300

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    gotoSlides(curSlide);
    activateDots(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    gotoSlides(curSlide);
    activateDots(curSlide);
  };

  //initialization
  const init = function () {
    gotoSlides(0);
    createDots();
    activateDots(0);
  };

  init();
  //Event handlers
  //next slide
  btnRight.addEventListener('click', nextSlide);
  //-100 0 100 200

  btnLeft.addEventListener('click', prevSlide);

  //using keyboard events
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    // if (e.key === 'ArrowRight') nextSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      gotoSlides(slide);
      activateDots(slide);
    }
  });
};

slider();

//other imp events

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOm tree loaded', e);
});

window.addEventListener('load', function () {
  console.log('page fully loaded');
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Lectures

//DOm Traversing
/*
//going downwards childs
const h1 = document.querySelector('h1');
const highlighter = h1.querySelectorAll('.highlight');
console.log(highlighter);
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//going upwards parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.backgroundColor = 'var(--color-secondary)';
h1.closest('h1').style.backgroundColor = 'var(--color-primary)';

//going sideways siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(50%)';
});

*/

//Event bubbling and capturing
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('nav link', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('nav', e.target, e.currentTarget);
});
*/

//Event listners
/*
const h1 = document.querySelector('h1');
const alertH1 = function () {
  alert('addEventListener:you are reading heading');
};
h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function () {
//   alert('onmouseenter: you are reading heading');
// };

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);
*/

//selecting elements
/*
const headerEl = document.querySelector('.header');
console.log(headerEl);

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1'));
console.log(document.getElementsByClassName('section--sign-up'));
console.log(document.getElementsByTagName('button'));
*/

//creating and inserting elements
/*
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close--cookie">Got it</button>  ';
const headerEl = document.querySelector('.header');
// headerEl.prepend(message);
headerEl.append(message);
// headerEl.append(message.cloneNode(true));

// headerEl.before(message);
// headerEl.after(message);

//insertAdjacentHTML method

/*
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


//Deleting elements
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentNode.removeChild(message);
  });

/*
  styles ,atttributes 
//Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.backgroundColor);
console.log(message.style.height); //does not work as style property works only on inline elements that we set

console.log(getComputedStyle(message).backgroundColor);
console.log(getComputedStyle(message).height);

const setHeight =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(setHeight);

// message.style.height = `${setHeight}`;

message.style.height = setHeight;
message.style.height = '79px';
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(getComputedStyle(message).height);

//setproperty

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt);

console.log(logo.className);

logo.alt = 'Beautyful minimalist logo';
//not standard attribute
console.log(logo.designer); //does not work
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); //absolute url
console.log(logo.getAttribute('src')); //relative same as in html code

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //absolute url
console.log(link.getAttribute('href')); //relative

//data attributes
console.log(logo.dataset.versionNumber);

//classes
logo.classList.add('c', 'd');
logo.classList.remove('c', 'd');
logo.classList.toggle('c', 'd');
logo.classList.contains('c', 'd');

*/

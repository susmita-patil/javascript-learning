'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

let currentScore, scores, activePlayer, playing;

//starting conditions
const init = function () {
  //reset all initial scores

  //   scores[0] = 0;
  //   scores[1] = 0;
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;

  //display on game
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice
btnRollEl.addEventListener('click', function () {
  if (playing) {
    //1.generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display dice number
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.check for 1 : if true switch  player
    if (dice === 1) {
      //set current score to 0 and switch player
      switchPlayer();
    } else {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

//holding current score
btnHoldEl.addEventListener('click', function () {
  if (playing) {
    //set total score to current score
    scores[activePlayer] += currentScore;

    //display total score

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check total score >=100: if true game wins ,if false switch player

    if (scores[activePlayer] >= 20) {
      console.log('you win game');
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch player
      switchPlayer();
    }
  }
});

//New game
btnNewEl.addEventListener('click', function () {
  init();
});

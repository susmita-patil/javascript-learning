'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' 👍CORRECT NUMBER';

document.querySelector('.guess').value = 629;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

//Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when no number selected
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
  }

  //when number guessed is right
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '👍 CORRECT NUMBER';
    displayMessage('👍 CORRECT NUMBER');

    document.querySelector('.number').textContent = secretNumber;

    // Css properties manipulation
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess number is different than scret number
  else if (guess !== secretNumber) {
    document.querySelector('.highscore').textContent = highScore;

    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High!' : 'Too Low';

      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('😐You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   //when number is too high
  //   else if (guess > secretNumber) {
  //     document.querySelector('.highscore').textContent = highScore;
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //when number is too low
  //   else if (guess < secretNumber) {
  //     document.querySelector('.highscore').textContent = highScore;
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

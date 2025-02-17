/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(`${secretNumber}`);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    displayMessage('No Number!');
    // When player has lost
  } else if (score === 0) {
    document.querySelector('.score').textContent = score;
    displayMessage('You have lost...');
    // When player has won
  } else if (guess === secretNumber) {
    document.querySelector('.score').textContent = score;
    displayMessage('Correct Number...');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      console.log('URA');
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When score is bigger
  } else if (guess > secretNumber) {
    score -= 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Number is lower...');
    // When score is lower
  } else if (guess < secretNumber) {
    score -= 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Number is bigger...');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = String(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

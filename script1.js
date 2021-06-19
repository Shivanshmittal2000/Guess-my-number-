'use script';
let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// console.log(num);
// document.querySelector('.number').textContent = num; /* by commenting this line you can hide the number*/
document.querySelector('.check').addEventListener('click', function () {
  if (score === 0) {
    document.querySelector('.message').textContent = ' Lose the game ';
    document.querySelector('body').style.backgroundColor = 'red';
  } else {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      document.querySelector('.message').textContent = 'No number';
      score -= 1;
      document.querySelector('.label-score').textContent = '💯 Score:' + score;
    } else if (guess === num) {
      document.querySelector('.message').textContent = '✌✌Correct Number';
      document.querySelector('.number').textContent = num;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.label-score').textContent = '💯 Score:' + score;
      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
        highscore = score;
      }
    } else if (guess < num) {
      document.querySelector('.message').textContent = 'Too Low';
      score -= 1;
      document.querySelector('.label-score').textContent = '💯 Score:' + score;
    } else {
      document.querySelector('.message').textContent = ' Too High ';
      score -= 1;
      document.querySelector('.label-score').textContent = '💯 Score:' + score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Guess number';
  document.querySelector('.number').textContent = num;
  score = 20;
  document.querySelector('.label-score').textContent = '💯 Score: ' + score;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('body').style.backgroundColor = '#222';
});

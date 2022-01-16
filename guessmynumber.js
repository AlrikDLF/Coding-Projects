'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

        /* No number */

    if (!guess) {
        displayMessage('⛔️ No number! ');

    } else if (guess<=0){
        displayMessage('⚠️ Write a number between 1 and 20.');

        /* The correct number */

    } else if (guess === secretNumber) {
        displayMessage('💪🏼 Well Done ! Play again !');
        document.querySelector('.title').textContent = '🎉 Correct Number !';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        /* NOT the correct number */

    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high !' : '📉 Too low !');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = '0';
            displayMessage('💥 You lost, TRY AGAIN !');
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.title').textContent = 'Guess My Number!'
});
'use strict';

const gameTitle = document.querySelector('h1');
const rollBtn = document.querySelector('.btn');
const diceOne = document.querySelector('.dice-1');
const diceTwo = document.querySelector('.dice-2');
const playerOneWinner = document.querySelector('#win-player-1');
const playerTwoWinner = document.querySelector('#win-player-2');
const scorePlayerOne = document.querySelector('#score-player--1');
const scorePlayerTwo = document.querySelector('#score-player--2');
const draw = document.querySelector('#draw');
console.log(playerOneWinner, playerTwoWinner, draw);

rollBtn.addEventListener('click', function () {
    const rollDice1 = Math.floor(Math.random() * 6) + 1;
    const rollDice2 = Math.floor(Math.random() * 6) + 1;

    diceOne.setAttribute('src', `./img/dice${rollDice1}.png`);
    diceTwo.setAttribute('src', `./img/dice${rollDice2}.png`);

    if (rollDice1 > rollDice2) {
        playerTwoWinner.classList.add('hidden');
        draw.classList.add('hidden');
        playerOneWinner.classList.remove('hidden');
        updateScore(1);
    } else if (rollDice2 > rollDice1) {
        playerOneWinner.classList.add('hidden');
        draw.classList.add('hidden');
        playerTwoWinner.classList.remove('hidden');
        updateScore(2);
    } else {
        playerOneWinner.classList.add('hidden');
        playerTwoWinner.classList.add('hidden');
        draw.classList.remove('hidden');
    }
});

const updateScore = function (winner) {
    let score;

    if (winner === 1) {
        score = parseInt(scorePlayerOne.textContent) + 1;
        scorePlayerOne.textContent = score.toString();
    } else if (winner == 2) {
        score = parseInt(scorePlayerTwo.textContent) + 1;
        scorePlayerTwo.textContent = score.toString();
    }

    console.log(score);
};

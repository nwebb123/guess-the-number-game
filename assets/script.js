'use strict';

//Global variable declarations
let randomNumBtw1And20 = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);
let score = 20;
let highScore = 0;


//Global functions. Makes logic below more readable. 
const displayMessage = message => {
    document.querySelector('.message').textContent = message;
}

const displayScore = score => {
    document.querySelector('.score').textContent = score;
}

//Set up event listener to check the value for the guess input using Check! button
document.querySelector('.check').addEventListener('click', function () {
    //Number method for type conversion since .value of users guess returns a string.
    let usersGuess = Number(document.querySelector('.guess').value);

    //Validate user input between 1 & 20. Could also use !usersGuess as an argument.
    if (usersGuess < 1 || usersGuess > 20) {
        displayMessage('Please enter a number between 1 and 20');
        //Win condition
    } else if (usersGuess === randomNumBtw1And20) {
        displayMessage('🏆 WINNER! 🏆');
        displayScore(score);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = randomNumBtw1And20;
        document.querySelector('.check').disabled = true;

        //Else if's to check if guess is > or < the random number, as well as lose condition.    
    } else if (usersGuess !== randomNumBtw1And20) {
        if (score > 1) {
            displayMessage(usersGuess > randomNumBtw1And20 ? 'Too high, guess again.' : 'Too low, guess again.');
            score--
            displayScore(score);

            //Lose condition
        } else {
            score --
            displayMessage('You lost the game... 😞');
            document.querySelector('.check').disabled = true;
            displayScore(score);
        }
    }
})


//Reset button (Again!)
document.querySelector('.again').addEventListener('click', function () {
    //Reset score and change styles back for new game
    randomNumBtw1And20 = Math.trunc(Math.random() * 20) + 1
    console.log(randomNumBtw1And20)
    //Could move this if statement to win condition in onclick function for .check but I like setting the high score with the .again button 
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    displayMessage('Good Luck!');

    score = 20;
    displayScore(score);
    document.querySelector('.guess').value = '';
    document.querySelector('.check').disabled = false;

})
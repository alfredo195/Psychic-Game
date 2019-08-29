/* var to hold values that the computer can pick from */
var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

/* var for starting score of game of zero */

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var letterUser = [];

var eachOfLetters = null;

/* make var computerGuess = computerChoices array */

var computerGuess = computerChoices[Math.random() * computerChoices.length];
console.log(computerGuess);

/* make functions */

function countGuessesLeft() {
  document.querySelector("guessesLeft").innerText =
    "Guesses Left" + guessesLeft;
}

/* functions for when users takes a guess */
// document.onkeyup = function(event) {
    // guessesLeft--;
    
    // var userGuess = (event.keyCode).toLowerCase();
// } 


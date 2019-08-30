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

var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

/* make functions */

function countGuessesLeft() {
  document.querySelector("guessesLeft").innerText=
    "Guesses Left" + guessesLeft;
}

/* functions for when users takes a guess */
function farUserGuesses() {
  document.querySelector("#letter").innerText = "Your Guesses so far: " + letterUser.join(" ");
}
countGuessesLeft();
/* function to reset */
var restart = function() {
  guessesLeft = 9;
  letterUser = [];
  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

// When the user presses a key, it will run the following function..
document.onkeyup = function(event) {
  guessesLeft--;

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  letterUser.push(userGuess);
  countGuessesLeft();
  farUserGuesses();

  if (userGuess === computerGuess) {
    wins++;
    document.querySelector("#wins").innerText = "Wins: " + wins;
    restart();
  } else if (guessesLeft === 0) {
    losses++;
    document.querySelector("#lose").innerText = "Loses: " + losses;
    restart();
  }
};

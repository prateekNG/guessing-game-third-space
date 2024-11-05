let min = 1;
let max = 1000;
let guess = Math.floor((min + max) / 2);
let remainingGuesses = 10; // Initialize remaining guesses

// Elements
const introScreen = document.getElementById('intro-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const currentGuessElement = document.getElementById('current-guess');
const remainingGuessesElement = document.getElementById('remaining-guesses');
const finalNumberElement = document.getElementById('final-number');
const startGameButton = document.getElementById('start-game');
const responseButtons = document.querySelectorAll('.response-button');
const playAgainButton = document.getElementById('play-again');

// Start game
startGameButton.addEventListener('click', () => {
  introScreen.classList.add('hidden');
  questionScreen.classList.remove('hidden');
  updateGuess();
});

// Handle responses
responseButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const response = event.target.getAttribute('data-response');
    if (response === 'yes') {
      min = guess + 1;
    } else {
      max = guess;
    }

    remainingGuesses -= 1; // Decrement remaining guesses

    if (min >= max || remainingGuesses <= 0) {
      displayResult();
    } else {
      updateGuess();
    }
  });
});

// Update the guess and question
function updateGuess() {
  guess = Math.floor((min + max) / 2);
  currentGuessElement.textContent = guess;
  remainingGuessesElement.textContent = remainingGuesses; // Update remaining guesses display
}

// Display the result
function displayResult() {
  questionScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  finalNumberElement.textContent = min;
}

// Play again
playAgainButton.addEventListener('click', () => {
  min = 1;
  max = 1000;
  guess = Math.floor((min + max) / 2);
  remainingGuesses = 10; // Reset remaining guesses
  resultScreen.classList.add('hidden');
  introScreen.classList.remove('hidden');
});
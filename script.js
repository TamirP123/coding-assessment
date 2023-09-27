// Create a start button
    // When clicked, timer starts
        // Timer counts down
    // Questions are presented on page
    

// Functionality
    // One question displayed, 4 choices
        // If choice === correct, next question
        // If choice === wrong, subtract 10 seconds
    // When timer === 0, end game
    // When all questions are answered, end game

// Game over
    // Display box to save intials and score
        // Local storage
    // Clear highscores
    // View highscores
        // Display local storage


var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var quizArea = document.querySelector(".quiz");

var timer;
var timerCount;
// Array that contains OBJECTS which contain question, options, and answer,
var quizArray = [
    {
        question: "What does HTML stand for",
        a: "HyperText Markup Language",
        b: "Random 1",
        c: "Random 2",
        d: "Random 3",
        correctAnswer: "a"
    },
    {
        question: "What does HTML stand for",
        a: "HyperText Markup Language",
        b: "Random 1",
        c: "Random 2",
        d: "Random 3",
        correctAnswer: "a"
    },
    {
        question: "What does HTML stand for",
        a: "HyperText Markup Language",
        b: "Random 1",
        c: "Random 2",
        d: "Random 3",
        correctAnswer: "a"
    }
]


function startGame () {
    timerCount = 80;
    startTimer();
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
    }, 1000);
  }

  
startButton.addEventListener("click", startGame);
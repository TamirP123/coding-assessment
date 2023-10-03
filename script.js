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



// Hide quizarea displayed on page
// Highscore page
    // Highscore === timer value
    // Input box
    // Submit button
// After submit, store into local storage
// Array of objects for highscore
// Reroute page to highscore page
    // Call out to local storage high score
    // Display to highscore HTML page
    // Sort highscore from highest to lowest
// Restart game
// Clear highscore ***

var startButton = document.querySelector(".start-button");
var highscoreButton = document.querySelector(".highscore");
var timerElement = document.querySelector(".timer-count");
var quizArea = document.querySelector(".quiz");
var questionTitle = document.querySelector(".question-title");
var feedback = document.querySelector(".feedback");
var submitForm = document.querySelector(".form");
var submitButton = document.querySelector("#submit");
var initialInput = document.querySelector("#initials");

var timer;
var score;
var highScores = [];
var timerCount;
var questionCounter = 0;
// Array that contains OBJECTS which contain question, options, and answer,
var quizArray = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language",
                "Random 1", 
                "Random 2", 
                "Random 3"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets",
                "Random 1", 
                "Random 2", 
                "Random 3"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "What is Javascript?",
        options: ["A programming language that creats interactity within a webpage",
                "Random 1", 
                "Random 2", 
                "Random 3"],
        correctAnswer: "A programming language that creats interactity within a webpage"
    },
    {
        question: "What is Javascript?",
        options: ["A programming language that creats interactity within a webpage",
                "Random 1", 
                "Random 2", 
                "Random 3"],
        correctAnswer: "A programming language that creats interactity within a webpage"
    },
    {
        question: "What is Javascript?",
        options: ["A programming language that creats interactity within a webpage",
                "Random 1", 
                "Random 2", 
                "Random 3"],
        correctAnswer: "A programming language that creats interactity within a webpage"
    },
    {
        question: "What is Javascript?",
        options: ["A programming language that creats interactity within a webpage",
                "Random 1", 
                "Random 2", 
                "Random 3"],
        correctAnswer: "A programming language that creats interactity within a webpage"
    }
]

function endGame() {
    // Clear page
    document.querySelector("main").innerHTML = "";
    console.log("Called");

    // Display message with score, then append submit form to enter initials.

    var message = document.createElement("p");
    message.textContent = "You finished with a score of: " + score;

    document.body.appendChild(message);
    document.body.appendChild(submitForm);
    document.getElementById("hidden").style.visibility = "visible";
}

function init() {
    score = 0;
    questionCounter = 0;
    
}

function viewHighScore() {
    var highScoreList = document.getElementById('highScores');
    var lastUser = JSON.parse(localStorage.getItem('user'));
    console.log(lastUser);

    for (var i = 0; i < highScores.length; i++) {

    }
  if (lastUser !== null) {
    highScores = lastUser;
  }

    document.querySelector("form").innerHTML = "";
    // Source code found on StackOverflow
    // highScores.sort((a, b) => b.score - a.score);
    
    highScoreList.innerHTML = score;
    document.getElementById("high-scores-container").style.visibility = "visible";

    // var restartButton = document.createElement("button");
    // restartButton.addEventListener("click", startGame());
    // document.body.appendChild(restartButton);
}

function checkAnswer(event) {
    // Check if answer is right or wrong
    console.log(event.target);
    if (event.target.textContent === quizArray[questionCounter].correctAnswer) {
        feedback.textContent = "You got the question right";
    }
    else {
        feedback.textContent = "You got the question wrong";
        timerCount = timerCount - 15; 
    }
    questionCounter++;
    console.log(quizArray.length);
    console.log(questionCounter);
    if (timerCount <= 0 || questionCounter === quizArray.length) {
        clearInterval(timer);
        score = timerCount;
        console.log(score);
        endGame();
    }
    else {
        displayQuestion();
    }
    
}
function displayQuestion() {
    // Displays question and loops through.
    var currentQuestion = quizArray[questionCounter].question;
    console.log(currentQuestion);
    quizArea.innerHTML = "";
    questionTitle.innerHTML = "";
    for (var i = 0; i < quizArray[questionCounter].options.length; i++) {
        var button = document.createElement("button");
        button.textContent = quizArray[questionCounter].options[i];
        questionTitle.textContent = currentQuestion;
        quizArea.appendChild(button);
        button.addEventListener("click", checkAnswer);
        console.log(questionCounter);
    }
}


function startGame () {
    init();
    this.remove();
    document.querySelector("h1").innerHTML = "";
    timerCount = 80;
    startTimer();
    displayQuestion();
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      if (timerCount === 0){
        //timer to end the game after the time is up
        clearInterval(timer);
        score = timerCount;
        console.log(score);
        endGame();
}
      timerElement.textContent = timerCount;
    }, 1000);
  }

  
startButton.addEventListener("click", startGame);

// highscoreButton.addEventListener("click", viewHighScore);

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var user = {
      name: initialInput.value.trim(),
      score: score
    };
  
    // set new submission to local storage 
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("highScores", JSON.stringify([]));
    var updatedUser = localStorage.getItem("user");
    updatedUser = JSON.parse(updatedUser);
    highScores.push(updatedUser);
    console.log(updatedUser);
    viewHighScore();
  });

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
var timerCount;
var questionCounter = 0;
// Array that contains OBJECTS which contain question, options, and answer,
var quizArray = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language",
                "Cascading Style Sheets", 
                "Javascript", 
                "Java"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets",
                "Java", 
                "Python", 
                "HTML"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "What is Javascript?",
        options: ["A programming language that creates interactity within a webpage",
                "Language that displays elements on a screen", 
                "Language that stlyes elements on a page", 
                "An application programming interface for either a web server or a web browser."],
        correctAnswer: "A programming language that creates interactity within a webpage"
    },
    {
        question: "What is a Web API?",
        options: ["A programming language that creats interactity within a webpage",
                "Data representation of the objects that comprise the structure and content of a document on the web.", 
                "A programming language that creates interactity within a webpage", 
                "An application programming interface for either a web server or a web browser."],
        correctAnswer: "An application programming interface for either a web server or a web browser."
    },
    {
        question: "What is the DOM?",
        options: ["A programming language that creats interactity within a webpage",
                "Online software development platform", 
                "Data representation of the objects that comprise the structure and content of a document on the web.", 
                "Version control system used for tracking changes in computer files"],
        correctAnswer: "Data representation of the objects that comprise the structure and content of a document on the web."
    }
]

if (!localStorage.getItem("highScores")) {
    localStorage.setItem("highScores", JSON.stringify([]));
}

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

// Locate title parent
// On start click > Hidden


// Reset Button
    // Restart button below highscoreList
    // Event listener for click
    // Executes startGame()
        // Remove highScoreList

    // Attach event listener to viewHighScorebutton
    // Execute viewHighScore()

function viewHighScore() {
    // var highScoreList = document.getElementById('highScores');
    var highScoreList = document.getElementById('high-scores-container');
    var highScores = JSON.parse(localStorage.getItem('highScores'));
    console.log(highScores);


    // Loop through highScores array
    // Create element
    // Add text content of highscore and initials to element
    // Append element to highScoresList
    for (var i = 0; i < highScores.length; i++) {
        var userInfo = document.createElement("p");
        userInfo.textContent = `${highScores[i].name} - ${highScores[i].score}`;
        highScoreList.appendChild(userInfo);
    }
    // highScoreList.hidden = false;
    highScoreList.removeAttribute("hidden");

    document.querySelector("form").innerHTML = "";
    
    

    // var restartButton = document.createElement("button");
    // restartButton.textContent = "Restart Quiz";
    // restartButton.addEventListener("click", startGame());
    // highScoreList.appendChild(restartButton);
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
    document.querySelector(".assessment").textContent = "";
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

highscoreButton.addEventListener("click", viewHighScore);

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    
    // create user object from submission
    var user = {
      name: initialInput.value.trim(),
      score: score
    };
  
    // set new submission to local storage 
    // localStorage.setItem("user", JSON.stringify(user));
    
    // var updatedUser = localStorage.getItem("user");
    // updatedUser = JSON.parse(updatedUser);

    highScores.push(user);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(user);
    viewHighScore();
  });

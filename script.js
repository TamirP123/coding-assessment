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
var timerElement = document.querySelector(".timer-count");
var quizArea = document.querySelector(".quiz");
var questionTitle = document.querySelector(".question-title");
var feedback = document.querySelector(".feedback");

var timer;
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
    quizArea.classList.add("hideHTML");
    console.log("Called");
}

function checkAnswer(event) {
    // console.log("Working");
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
        endGame();
    }
    else {
        displayQuestion();
    }
    
}
function displayQuestion() {
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
    
    // var option1 = document.createElement('BUTTON');
    // var option1Text = document.createTextNode(quizArray[0].options[0]);
    //     option1.appendChild(option1Text);

    //     var option2 = document.createElement('BUTTON');
    // var option2Text = document.createTextNode(quizArray[0].options[1]);
    //     option2.appendChild(option2Text);

    //     var option3 = document.createElement('BUTTON');
    // var option3Text = document.createTextNode(quizArray[0].options[2]);
    //     option3.appendChild(option3Text);

    //     var option4 = document.createElement('BUTTON');
    // var option4Text = document.createTextNode(quizArray[0].options[3]);
    //     option4.appendChild(option4Text);

    // quizArea.textContent = quizArray[0].question;
    // quizArea.appendChild(option1);
    // quizArea.appendChild(option2);
    // quizArea.appendChild(option3);
    // quizArea.appendChild(option4);
}


function startGame () {
    timerCount = 80;
    startTimer();
    displayQuestion();
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
    }, 1000);
  }

  
startButton.addEventListener("click", startGame);

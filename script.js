//Page Id's
var homeEl = document.getElementById("home");
var quizEl = document.getElementById("quiz");
var endScreenEl = document.getElementById("end-screen");
var highScoreEl = document.getElementById("high-scores");

var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var scoreEl = document.getElementById("score");
var finalScoreEl = document.getElementById("final-score");
var initialsEl = document.getElementById("initals");
var highScoreListEl = document.getElementById("highscore-list")

// Timer and buttonn Id's
var timerEl = document.getElementById("timer");
var startButtonEl = document.getElementById("start-button");
var saveButtonEl = document.getElementById("save");


//These are the 5 quiz questions, with corresponding answer choices.
const questions = [
  {
    question: "What is the main purpose of JavaScript?",
    answers: [
      "To style a webpage",
      "To make webpages intercative",
      "To watch videos",
      "To create a webpage",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you select an Id within JavaScript?",
    answers: ["selectId", "getId", "querySelector", "websiteSelector"],
    correctIndex: 2,
  },
  {
    question: "Approximately when was JavaScript invented?",
    answers: ["1985", "1995", "2005", "2015"],
    correctIndex: 1,
  },
  {
    question: "What is the JavaScript file called?",
    answers: ["style.js", "index.js", "js.jpeg", "script.js"],
    correctIndex: 3,
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answers: [
      "var name",
      "variable name",
      "createVariable name",
      "declareVariable name",
    ],
    correctIndex: 0,
  },
];

var currentQuestion = 0;
var timeLeft = 60;
var score = 0;
var timeInterval;

//This is the timer function for the quiz.
function countdown() {
  timerEl.textContent = "Time Left: " + timeLeft;
  timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time Left: " + timeLeft;
    if (timeLeft <= 0) {
      quizEl.style.display = "none";
      endEl.style.display = "block";
      clearInterval(timeInterval);
      finalScoreEl.textContent = score;
    }
  }, 1000);
}

//This function displays the questions in order, gives the user a point based on the correct answer, and subtracts 10 seconds of the user selects a wrong answer.
function displayQuestion() {
  if (currentQuestion >= questions.length) {
    quizEl.style.display = "none";
    endScreenEl.style.display = "block";
    clearInterval(timeInterval);
    finalScoreEl.textContent = score;
  } else {
    for (let i = 0; i < 4; ++i) {
      var answerEl = document.getElementById(`answer${i}`);
      questionEl.textContent = questions[currentQuestion].question;
      answerEl.textContent = questions[currentQuestion].answers[i];
      answerEl.onclick = function (e) {
        var correctAnswer = questions[currentQuestion].correctIndex;
        if (i == correctAnswer) {
          score++;
          scoreEl.textContent = score;
        } else {
          timeLeft -= 10;
        }
        currentQuestion += 1;
        displayQuestion();
      };
    }
  }
}


// These functions take in the user's score data and intials, save them to local storage, and display them on the high scores page.
saveButtonEl.addEventListener("click", function(event) {
  var newScore = {
    name: initialsEl,
    score: score.value,
  }
  localStorage.setItem("newScore", JSON.stringify(newScore));
  displayScores()
})

function displayScores() {
  endScreenEl.style.display = "none";
  highScoreEl.style.display = "block";
  var highScores = JSON.parse(localStorage.getItem("newScore"));
  if (highScores = !null) {
    highScoreListEl.textContent = highScores.name + highScores.score;
  }
}

//This is the event listener for the start button. Starts the timer and runs the "display question" function to start the quiz.
startButtonEl.addEventListener("click", function () {
  homeEl.style.display = "none";
  quizEl.style.display = "block";
  scoreEl.textContent = score;
  countdown();
  displayQuestion();
});

//global variables
var startButtonEl = document.getElementById("start-button");
var homeEl = document.getElementById("home");
var quizEl = document.getElementById("quiz");
var endScreenEl = document.getElementById("end-screen");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var scoreEl = document.getElementById("score");
var finalScoreEl = document.getElementById("final-score");

//quiz questions
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
          scoreEl.textContent = `Score: ${score}`;
        } else {
          timeLeft -= 5;
        }
        currentQuestion += 1;
        displayQuestion();
      };
    }
  }
}

startButtonEl.addEventListener("click", function () {
  homeEl.style.display = "none";
  quizEl.style.display = "block";
  scoreEl.textContent = `Score: ${score}`;
  countdown();
  displayQuestion();
});

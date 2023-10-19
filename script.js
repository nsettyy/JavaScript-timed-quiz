//global variables
var startButtonEl = document.querySelector.getElementById("start-button");
var homeEl = document.querySelector.getElementById("home");

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

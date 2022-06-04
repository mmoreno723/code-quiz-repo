// Dependencies
var startBtn = document.querySelector("#startButton");
var scoreBtn = document.querySelector("#highscores");
var containerOne = document.querySelector("#containerOne");
var containerTwo = document.querySelector("#containerTwo");
var timer = document.querySelector("#timer");

var timeLeft;
var timeInterval;
var currentScore;
var currentQuestion;
var questions = [
  {
    question: "Which of the following is NOT a variable in Javascript?",
    selections: ["String", "Boolean", "Number", "Selector"],
    answer: 3,
  },
  {
    question:
      "What do you input if you are trying to test for strict equality?",
    selections: ["===", "==", "isEqual", "/="],
    answer: 0,
  },
  {
    question:
      "Which of the following can you use to display a message to the users screen?",
    selections: ["showMessage", "alert()", "display()", "popup()"],
    answer: 1,
  },
  {
    question:
      "Where is the correct place to insert a JavaScript file within the HTML document?",
    selections: [
      "<header> section",
      "<main> section",
      "<body> section",
      "<footer> section",
    ],
    answer: 2,
  },
];

function startGame() {
  questionCount = 0;
  currentScore = 0;
  setTimer();
  showQuestion();
}

function setTimer() {
  var timeLeft = 90;
  timer.textContent = "Time: " + timeLeft;
  console.log(timeLeft);
  var timeInterval = setInterval(function () {
    timeLeft--;

    timer.textContent = "Time: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval);

      window.alert("Times up, game over :(");
      showResult();
    }
  }, 1000);
}

function showQuestion() {
  containerOne.textContent = "";
  containerTwo.textContent = "";

  var currentQuestion = questions[questionCount];

  var question = document.createElement("h2");
  question.textContent = currentQuestion.question;
  containerOne.appendChild(question);

  var selections = document.createElement("ul");

  currentSelection = currentQuestion.selections;

  var select;
  for (let i = 0; i < currentSelection.length; i++) {
    select = document.createElement("button");
    select.textContent = i + 1 + ". " + currentSelection[i];
    select.setAttribute("id", i);
    select.setAttribute("class", "selection");

    select.addEventListener("click", function (event) {
      if (i === currentQuestion.answer) {
        window.alert("Correct! :)");
        currentScore++;
      } else {
        window.alert("Incorrect! :(");
        timeLeft -= 5;
      }
      nextQuestion();
    });
    var li = document.createElement("li");
    li.appendChild(select);
    selections.appendChild(li);
  }
  containerTwo.appendChild(selections);
}

function nextQuestion() {
  if (questionCount === questions.length - 1) {
    clearInterval(timeInterval);
    timer.textContent = "0";
    showResult();
  } else {
    questionCount++;
    showQuestion();
  }
}

function showResult() {
  containerOne.textContent = "";
  containerTwo.textContent = "";

  var title = document.createElement("h2");
  title.textContent = "Results";
  containerOne.appendChild(title);

  var showScore = document.createElement("p");
  showScore.textContent = "Your final score is " + currentScore;
  containerOne.appendChild(showScore);

  var label = document.createElement("label");
  label.textContent = "Enter initials: ";
  containerTwo.appendChild(label);

  var form = document.createElement("input");
  form.setAttribute("type", "text");
  form.setAttribute("id", "inital");
  containerTwo.appendChild(form);

  var submit = document.createElement("button");
  submit.setAttribute("id", "submit");
  submit.textContent = "Submit";
  containerTwo.appendChild(submit);

  submit.addEventListener("click", function (event) {
    localStorage.setItem(form.value, currentScore);
    scoreboard();
  });
}

function scoreboard() {
  clearInterval(timeInterval);
  timer.textContent = "0";

  var title = document.createElement("h2");
  title.textContent = "Scoreboard";

  containerOne.textContent = "";
  containerOne.appendChild(title);

  var board = getScoreBoard();
  board.setAttribute("id", "board");
  containerOne.appendChild(board);

  containerTwo.textContent = "";
  var goHome = document.createElement("button");
  goHome.textContent = "Go Home";
  containerTwo.appendChild(goHome);

  var clearBoard = document.createElement("button");
  clearBoard.textContent = "Clear Scoreboard";
  containerTwo.appendChild(clearBoard);

  goHome.addEventListener("click", function (event) {
    window.location.reload();
  });
}

function getScoreBoard() {
  var board = document.createElement("ul");
  var element = document.createElement("li");
  var name;
  var score;

  for (let i = 0; i < localStorage.length; i++) {
    name = localStorage.key(i);
    score = localStorage.getItem(name);
    element.textContent = name + " - " + score;

    board.appendChild(element.cloneNode(true));
  }

  return board;
}

scoreBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scoreboard();
});

startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  startGame();
});

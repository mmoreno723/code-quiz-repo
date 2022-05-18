// Dependencies
var time = 90;

var timerEl = document.getElementById('timer');
var nextButton = document.getElementById('nextQuestion');


// Quiz Box

var quizQuestion = document.getElementById('questionsList');


// Highscores box
var body = document.body;
var h1El = document.createElement("h1");
var scoresInfoEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li1");
var li2 = document.createElement("li2");
var li3 = document.createElement("li3");
var scoresGoBack = document.createElement("button");
var clearScores = document.createElement("button");


// Starting Data
var startEl = document.getElementById('startButton');
var buttonOne = document.getElementById("button-1");
var startingTextBox = document.querySelector(".startingText")
var quizBox = document.querySelector("#quizBox");
var questions = {
    listofQuestions: ["What are the items in an angled bracket (<>) known as in HTML?", 
    "How do we access the styling in JavaScript?", 
    "What is one way you can select an HTML element using JavaScript?",
    "What do you use to listen for a click?",]
}    
    
    // "answer" : 1



var selections = {
    listofAnswers: ["Tags", "Queries", "Scripts", "ID's"] 
}    


startingTextBox.setAttribute("style", "display:block");
quizBox.setAttribute("style", "display: none");
// Functions
    // start game
function startQuiz() {
    startingTextBox.setAttribute("style", "display:none");
    countdown();
    quizBox.setAttribute("style", "display:block;");
    renderCurrentQuestion();
    // determine if user click matches the correct answer
    // correct answer
    // what is our current question?
    // function render each question
    // current question index?
    // wrong answer
    // move on to next question
    // each wrong answer deducts time by 5 seconds
}


function renderCurrentQuestion() {
    var currentQuestion = questions.listofQuestions[0];
    document.getElementById("questionsList").innerHTML = currentQuestion;
    nextButton.addEventListener("click", function() {
        renderNextQuestion();
    })
    
    
    //chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    //quizQuestion.textContent = chosenQuestion;

}

function renderNextQuestion () {
    var userSelection = nextButton.addEventListener("click", function() {})
    if (userSelection === true) {
        currentQuestion++;
    }
    console.log (currentQuestion);
}

function renderAnswer() {
    var currentAnswers = selections.length;
    document.getElementById("buttons-1").innerHTML = currentAnswers
    console.log(currentAnswers);
}

function countdown() {
    var timeLeft = 91;

    var timeInterval = setInterval(function() {
        
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining"

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            //window.alert("Outta Time!")

        }
    }, 1000);
}
        
// User Interactions
startEl.addEventListener("click", function() {
    startQuiz();
})

nextButton.addEventListener("click", function() {
    renderNextQuestion();
})
    // user selection when answer choice is clicked
// Initialization
// questions 





h1El.textContent = "Highscores";
body.appendChild(h1El);
body.appendChild(scoresInfoEl);
scoresInfoEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center; padding: 40px;");
scoresInfoEl.setAttribute("style", "margin:auto; width:30%; text-align:left; font-size:18px;");
//scoresGoBack.setAttribute("style", "text-align:center; background-color: black;");
//clearScores.setAttribute("style", "text-align:center; background-color: cornflowerblue;");

var highScores = ["", "", "", ""];

for (var i = 0; i < highScores.length; i++) {
    var highScore = highScores[i];
    var li = document.createElement("li");
    li.textContent = highScore;
    li.setAttribute("style", "background: #6495ED; padding 5px;");
    listEl.appendChild(li);
}






// add startQuiz(); to make sure countdown starts



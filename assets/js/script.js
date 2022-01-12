console.log("test");
var startButton = document.querySelector(".start-button");


var questions = [{
question: "What is the rarest M&M colour?",
answer1: "Brown",
answer2: "Yellow",
answer3: "Pink",
answer4: "Red",
correct: "Brown",


},{
    question: "In what year were the first Air Jordan sneakers released",
    answer1: "1984",
    answer2: "2021",
    answer3: "1992",
    answer4: "1995",
    correct: "1984",
       
    },

    {
        question: "How many of Snow White’s seven dwarfs have names ending in the letter Y?",
        answer1: "2",
        answer2: "4",
        answer3: "6",
        answer4: "5",
        correct: "5",
           
        }
];

var score = 0;

let i = 0;
const thequestions = document.getElementById("question");
const choice1 = document.getElementById("answer1");
const choice2 = document.getElementById("answer2");
const choice3 = document.getElementById("answer3");
const choice4 = document.getElementById("answer4");



function startGame() {
    setTimer();
    showQuestions();

}

let time = 5
const timeEl=document.getElementById("timer-set")

function showQuestions(){
thequestions.textContent=questions[i].question;
choice1.textContent=questions[i].answer1;
choice2.textContent=questions[i].answer2;
choice3.textContent=questions[i].answer3;
choice4.textContent=questions[i].answer4;

}

function setTimer() {
    let interval = setInterval(()=>{
        time--
        timeEl.textContent = time;
        if(time===0){
            clearInterval(interval)
            window.location="resultPage.html";
            // go to resultpage
        }

        },1000)
}




// startButton.addEventListener("click",() =>{

console.log();

window.onload=startGame();

// });



// FUNCTIONS 
// Start button to start game / timer
// Scores
// questions and answers
// next button to go to next question
// scores to each question right
// Timer
// Timer deduction for each question asked wrong
// game finishes when timer has finished 
// on the result pages, store initials and score and click save button

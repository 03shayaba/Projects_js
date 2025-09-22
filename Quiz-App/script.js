const quizData = [
  {
    question: "Which is the largest animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Which is the fastest land animal?",
    answer: [
      { text: "Cheetah", correct: true },
      { text: "Tiger", correct: false },
      { text: "Leopard", correct: false },
      { text: "Lion", correct: false },
    ],
  },
  {
    question: "What is the largest continent in the world?",
    answer: [
      { text: "Africa", correct: false },
      { text: "Asia", correct: true },
      { text: "Europe", correct: false },
      { text: "Australia", correct: false },
    ],
  },
  {
    question: "Who is known as the Father of Computers?",
    answer: [
      { text: "Albert Einstein", correct: false },
      { text: "Charles Babbage", correct: true },
      { text: "Isaac Newton", correct: false },
      { text: "Thomas Edison", correct: false },
    ],
  },
  {
    question: "Which gas do plants release during photosynthesis?",
    answer: [
      { text: "Oxygen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answer: [
      { text: "Monaco", correct: false },
      { text: "Vatican City", correct: true },
      { text: "Maldives", correct: false },
      { text: "Singapore", correct: false },
    ],
  },
  {
    question: "How many players are there in a football (soccer) team?",
    answer: [
      { text: "9", correct: false },
      { text: "10", correct: false },
      { text: "11", correct: true },
      { text: "12", correct: false },
    ],
  },
  {
    question: "Which organ purifies our blood?",
    answer: [
      { text: "Heart", correct: false },
      { text: "Lungs", correct: false },
      { text: "Kidneys", correct: true },
      { text: "Liver", correct: false },
    ],
  },
  {
    question: "Which is the largest ocean on Earth?",
    answer: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answer: [
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Seoul", correct: false },
      { text: "Bangkok", correct: false },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    answer: [
      { text: "Amazon River", correct: false },
      { text: "Nile River", correct: true },
      { text: "Yangtze River", correct: false },
      { text: "Ganga River", correct: false },
    ],
  },
  {
    question: "Which instrument measures temperature?",
    answer: [
      { text: "Barometer", correct: false },
      { text: "Thermometer", correct: true },
      { text: "Hygrometer", correct: false },
      { text: "Seismograph", correct: false },
    ],
  },
  {
    question: "Who invented the telephone?",
    answer: [
      { text: "Alexander Graham Bell", correct: true },
      { text: "Thomas Edison", correct: false },
      { text: "Nikola Tesla", correct: false },
      { text: "James Watt", correct: false },
    ],
  },
  {
    question: "Which is the national bird of India?",
    answer: [
      { text: "Peacock", correct: true },
      { text: "Sparrow", correct: false },
      { text: "Eagle", correct: false },
      { text: "Parrot", correct: false },
    ],
  },
];


const questionsElement = document.getElementById("question");
const answerbutton = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML="Next"

    showQuestion();
}


function  showQuestion(){

    resetState();
    let currentQuestion = quizData[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; 
    questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct ;
        }
        button.addEventListener('click' , selectAnswer)
    });


}


function resetState(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target ;
    const isCorrect = selectBtn.dataset.correct === "true" ;
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct === "true"){
           button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextbutton.style.display ="block"
}

 function showScore(){
    resetState();
    questionsElement.innerHTML = `You scored ${score} out of ${quizData.length}`
    nextbutton.innerHTML = "play Again";
    nextbutton.style.display = "block";
 }
function handleNextButton(){
     currentQuestionIndex++ ;
    if(currentQuestionIndex < quizData.length){
       
        showQuestion();
    }else{
        showScore();
    }
}
nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex < quizData.length){
        handleNextButton()
    }else{
        startQuiz();
    }
})

startQuiz();

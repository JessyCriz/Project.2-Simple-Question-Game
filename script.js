const quizData = [
    {
        question: "What is the capital of Philippines?",
        options: ["Manila", "Baguio", "Cebu", "Davao"],
        answer: "Manila"
    },

    {
        question: "What is the summer capital of the Philippines?",
        options: ["Manila", "Baguio", "Cebu", "Davao"],
        answer: "Baguio"
    },

    {
        question: "What is the orchid capital of the Philippines?",
        options: ["Manila", "Baguio", "Cebu", "Davao"],
        answer: "Davao"
    },

    {
        question: "Which province is the salad bowl of the Philippines?",
        options: ["Benguet", "MT.Province", "Abra", "Ifugao"],
        answer: "Benguet"
    },

    {
        question: "Which city has the coldest temperature in Philippines?",
        options: ["Manila", "Baguio City", "Cebu City", "Davao City"],
        answer: "Baguio City"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question")
const optionsElement = document.getElementById("options")
const scoreElement = document.getElementById("score")

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const optionButton = document.getElementById(`option${i + 1}`);
        optionButton.textContent = currentQuestion.options[i];
        optionButton.addEventListener("click", checkAnswer);
    }
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = quizData[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    alert(`Quiz completed! Your score is ${score}/${quizData.length}`);
}
window.addEventListener("load", loadQuestion);
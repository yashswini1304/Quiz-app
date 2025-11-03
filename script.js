document.addEventListener('DOMContentLoaded', () => {
    // Quiz questions array
    const quizData = [
    {
        question: "What is the capital of France?",
        a: "London",
        b: "Berlin",
        c: "Paris",
        d: "Madrid",
        correct: "c"
    },
    {
        question: "Which programming language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    }
];

// Get DOM elements
const quizForm = document.getElementById('quiz-form');
const questionEl = document.getElementById('question');
const progressEl = document.getElementById('question-progress');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const totalQuestionsEl = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');
const nextBtn = document.getElementById('next-btn');
const quizContent = document.querySelector('.quiz-content');

let currentQuestion = 0;
let score = 0;

function initQuiz() {
    currentQuestion = 0;
    score = 0;
    nextBtn.innerHTML = "Next Question";
    showQuestion();
    resultEl.classList.add('hide');
    quizContent.classList.remove('hide');
}

function showQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.textContent = currentQuizData.question;
    document.querySelector('label[for="a"]').textContent = currentQuizData.a;
    document.querySelector('label[for="b"]').textContent = currentQuizData.b;
    document.querySelector('label[for="c"]').textContent = currentQuizData.c;
    document.querySelector('label[for="d"]').textContent = currentQuizData.d;
    progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    const checkedInput = document.querySelector('input[name="answer"]:checked');
    if (checkedInput) checkedInput.checked = false;
    nextBtn.innerHTML = currentQuestion === quizData.length - 1 ? "Submit Quiz" : "Next Question";
}

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const answer = document.querySelector('input[name="answer"]:checked');
    if (!answer) {
        alert("Please select an answer!");
        return;
    }
    if (answer.value === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizContent.classList.add('hide');
    resultEl.classList.remove('hide');
    scoreEl.textContent = score;
    totalQuestionsEl.textContent = quizData.length;
}

    restartBtn.addEventListener('click', initQuiz);
    initQuiz();
    });
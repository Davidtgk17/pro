let menu = document.querySelector('.header__icon')
let nav = document.querySelector('.header__nav')
let header = document.querySelector('.header') 
let icon = document.querySelector('.header__icon > .fa-solid')
let body = document.querySelector('body')


menu.addEventListener('click', function() {
    nav.classList.toggle('nav__active')
    header.classList.toggle('header__active')
    icon.classList.toggle('fa-xmark')
    body.classList.toggle('no-scroll')
})



let score = 0;
let currentQuestion = 0;
const questions = document.querySelectorAll(".question");
const result = document.getElementById("result");

function checkAnswer(button, answer) {
    const question = questions[currentQuestion];
    if (parseInt(question.getAttribute("data-answer")) === answer) {
        score++;
    }
    question.classList.add("hidden");
    currentQuestion++;
    if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.remove("hidden");
    } else {
        result.textContent = `Вы набрали ${score} из ${questions.length} баллов!`;
        result.classList.remove("hidden");
    }
}

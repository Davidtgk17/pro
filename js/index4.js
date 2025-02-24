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


let point = 0
let step = 0
let answer__question = document.querySelectorAll('.answer__question')
let result = document.querySelector('.result')

function checkanswer(answer) {
    let question = answer__question[step]
    if(question.getAttribute('data-answer') == answer) {
        point++
    }
    question.classList.add('hidden')
    step++
    if(step < answer__question.length) {
        answer__question[step].classList.remove('hidden')
    } else {
        question.classList.add('hidden')
        result.classList.remove('hidden')
        result.textContent = 'Вы набрали '+ point + ' из ' +step 
    } 
}
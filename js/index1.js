let menu = document.querySelector('.header__icon')
let nav = document.querySelector('.header__nav')
let header = document.querySelector('.header') 
let icon = document.querySelector('.header__icon > .fa-solid')
let body = document.querySelector('body')
let plus = document.querySelector('.fa-plus')
let opisanie = document.querySelector('.welcome__desc')

menu.addEventListener('click', function() {
    nav.classList.toggle('nav__active')
    header.classList.toggle('header__active')
    icon.classList.toggle('fa-xmark')
    body.classList.toggle('no-scroll')
})

plus.onclick = function() {
    opisanie.classList.toggle('welcome__active')
}
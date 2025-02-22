let menu = document.querySelector('.header__icon');
let nav = document.querySelector('.header__nav');
let header = document.querySelector('.header');
let icon = document.querySelector('.header__icon > .fa-solid');
let body = document.querySelector('body');
let plus = document.querySelector('.fa-plus');
console.log(plus)
let opisanie = document.querySelector('.welcome__desc');
let plmn = document.querySelectorAll('.fa-plus-minus');
let card_active = document.querySelectorAll('.card__body');

menu.addEventListener('click', function() {
    nav.classList.toggle('nav__active');
    header.classList.toggle('header__active');
    icon.classList.toggle('fa-xmark');
    body.classList.toggle('no-scroll');
});

plus.onclick = function() {
    opisanie.classList.toggle('welcome__active')
}

plmn.forEach(function(el, i) {
    el.onclick = function() {
        const description = card_active[i];
        description.classList.toggle('active');
    };
});


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


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.answer__btn');
    const questions = document.querySelectorAll('.answer__quest');
    let currentQuestion = 0; // Начинаем с первого вопроса

    // Функция для обработки кликов по кнопкам
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Получаем букву выбранного ответа
            const selectedAnswer = button.innerText[0].toLowerCase();

            // Получаем правильный ответ из атрибута data-answer текущего вопроса
            const correctAnswer = questions[currentQuestion].getAttribute('data-answer');

            // Проверка правильности ответа
            if (selectedAnswer === correctAnswer) {
                alert('Правильный ответ!');
            } else {
                alert('Неправильный ответ!');
            }

            // Скрываем текущий вопрос
            questions[currentQuestion].classList.add('hidden');

            // Переходим к следующему вопросу
            currentQuestion++;
            if (currentQuestion < questions.length) {
                questions[currentQuestion].classList.remove('hidden');
            } else {
                // Если это последний вопрос, показываем результат
                document.getElementById('result').classList.remove('hidden');
                document.getElementById('result').innerText = 'Тест завершен!';
            }
        });
    });
});
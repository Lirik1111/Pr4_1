document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');

    // Змінні для назви бургера і шляху до картинки
    const burgerName1 = 'Стандарт';
    const burgerImageSrc1 = './image/burger.png';
    const burgerName2 = 'Чорний бургер';
    const burgerImageSrc2 = './image/burgerBlack.png';

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTaste();
    });

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    });

    const playTaste = () => {
        const renderQuestions = () => {
            questionTitle.textContent = 'Якого кольору бургер ви бажаєте?';
            formAnswers.innerHTML =
                `<div class="answers-item d-flex flex-column">
                    <input type="radio" id="answerItem1" name="answer" class="d-none">
                    <label for="answerItem1" class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src="${burgerImageSrc1}" alt="${burgerName1}">
                        <span>${burgerName1}</span>
                    </label>
                </div>
                <div class="answers-item d-flex justify-content-center">
                    <input type="radio" id="answerItem2" name="answer" class="d-none">
                    <label for="answerItem2" class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src="${burgerImageSrc2}" alt="${burgerName2}">
                        <span>${burgerName2}</span>
                    </label>
                </div>`;
        }
        renderQuestions();
    }
});


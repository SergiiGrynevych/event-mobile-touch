const box = document.querySelector('.box');

box.addEventListener('touchstart', start);

box.addEventListener('touchend', end);

box.addEventListener('touchmove', move);

function start() {
    box.textContent = 'Ты дотронулся до меня!!!!';
}

function end() {
    box.textContent = 'Дотронься!!!';
}

function move() {
    box.textContent = 'Ты водишь по мне пальцем!!!';
}



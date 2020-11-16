const box = document.querySelector('.box');

box.addEventListener('touchstart', () => {
    box.textContent = 'Ты дотронулся до меня!!!!';
});

box.addEventListener('touchend', () => {
    box.textContent = 'Дотронься!!!';
});

box.addEventListener('touchmove', () => {
    box.textContent = 'Ты водишь по мне пальцем!!!';
});

const ham = document.querySelector('.show-mobile');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');

ham.addEventListener('click', () => {
    modal.classList.toggle('modal-hidden');
})

close.addEventListener('click', () => {
    modal.classList.toggle('modal-hidden');
})
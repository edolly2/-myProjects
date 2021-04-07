const signUp = document.querySelector('.sign-up');
const exit = document.querySelector('.exit');
const signUpModal = document.querySelector('.sign-up-modal-container');
const body = document.querySelector('body');
const signUpExit = document.querySelector('.sign-up-exit');



$(document).ready(() => {


    $('.sign-in').click(function() {
        // modal.classList.add('sign-in-show');
        $('.sign-in-modal-container').slideDown('slow');
    });

    $('.exit').click(function() {
        $('.sign-in-modal-container').slideUp('slow');;
    });

})

signUp.addEventListener('click', () => {
    signUpModal.classList.add('show');
    body.classList.add('overflow');
    signUp.classList.add('hide');
});

signUpExit.addEventListener('click', () => {
    signUpModal.classList.remove('show');
    body.classList.remove('overflow');
    signUp.classList.remove('hide');
});
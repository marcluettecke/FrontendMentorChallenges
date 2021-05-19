const form = document.querySelector('form');
const email = document.querySelector('#email');
const button = document.querySelector('button');
const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

button.addEventListener('click', e => {
    e.preventDefault();

    if(!re.test(email.value)) {
        form.classList.add('error');
    } else {
        form.classList.remove('error');
    }
})
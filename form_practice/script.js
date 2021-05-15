const client_name = document.querySelector('#name');
const password = document.querySelector('#password');
const verify = document.querySelector('#verify');
const form = document.querySelector('#form');
const errorElement = document.querySelector('#error');


form.addEventListener('submit', (e) => {
    let messages = []
    if (client_name.value === '' || client_name.value == null) {
        messages.push('Name is required');
    }

    if ((password.value.length <= 6) || (password.value.length >= 20)) {
        messages.push('Password must be between 6 and 20 characters.');
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password.');
    }

    if (password.value !== verify.value) {
         messages.push('Passwords do not match');
    }

    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ');
        e.preventDefault();
    }    
})
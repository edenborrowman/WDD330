const client_name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (client_name.value === '' || client_name.value == null){
        messages.push('Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('Passowrd must be longer than 6 characters.')
    }

    if (password.value.length >= 20) {
        messages.push('Passowrd must be less than 20 characters.')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password.')
    }

    if (messages.length > 0) {    
    errorElement.innerText = messages.join(', ')
    e.preventDefault()
    }
})
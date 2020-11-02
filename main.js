window.onload = function() {
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setErrorFor (username, 'Can not skip username')
    } else {
        setSuccessFor (username);
    }

    if(emailValue === ''){
        setErrorFor (email, 'Can not skip email')
    } else {
        setSuccessFor (email);
    }

    if(password2Value !== passwordValue ){
        setErrorFor (password2, 'Password not match')
    } else if(password2Value === ''){
        setErrorFor (password2, 'Can not skip double-check')
    } else {
        setSuccessFor (password2);
    }

    if(passwordValue === ''){
        setErrorFor (password, 'Can not skip password')
    } else {
        setSuccessFor (password);
    }
}


function setErrorFor (input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
formControl.className = 'form-control success';
}

}
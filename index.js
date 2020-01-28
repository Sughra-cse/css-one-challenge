const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');


email.addEventListener('input', function (event) {
    
  if (email.validity.valid) {
    emailError.innerHTML = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    showError();
}
});
form.addEventListener('submit', function (event) {
    if(!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});
function showError() {
    if(email.validity.valueMissing) {
        emailError.textContent = 'Please provide  a valid e-mail address.';
    } else if(email.validity.typeMismatch) {
        emailError.textContent = 'Please provide  a valid e-mail addres.';
    } else if(email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }
    emailError.className = 'error active';
}
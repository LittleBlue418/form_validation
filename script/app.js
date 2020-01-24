// Form Blur Event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('postCode').addEventListener('blur', validatePostCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


// Validation functions
function validateName() {
  const name = document.getElementById('name');
  const regEx = /^([a-zA-Z',.-]+( [a-zA-z',.-]+)*){2,20}$/;


  if(!regEx.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validatePostCode(){
  const postCode = document.getElementById('postCode');
  const regEx = /^([a-zA-Z0-9',.-]+( [a-zA-z0-9',.-]+)*){5,8}$/


  if(!regEx.test(postCode.value)) {
    postCode.classList.add('is-invalid');
  } else {
    postCode.classList.remove('is-invalid');
  }

}

function validateEmail() {
  const email = document.getElementById('email');
  const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/


  if(!regEx.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const regEx = /^(\([0-9\-\+]{2,6}\))?([0-9 \-]){6,12}$/


  if(!regEx.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}
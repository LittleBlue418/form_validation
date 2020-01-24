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


  if(!regEx.test(name.value)) {
    postCode.classList.add('is-invalid');
  } else {
    postCode.classList.remove('is-invalid');
  }

}

function validateEmail() {}

function validatePhone() {}
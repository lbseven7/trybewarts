const inputEmail = document.querySelector('.email');
const inputSenha = document.querySelector('.senha');
const btnLogin = document.querySelector('#btn-login');
const agreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');

function validate() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validate);

function btnStatus() {
  if (agreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

agreement.addEventListener('click', btnStatus);

const inputEmail = document.querySelector('.email');
const inputSenha = document.querySelector('.senha');
const btnLogin = document.querySelector('#btn-login');

function validate () {
    if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
}

btnLogin.addEventListener('click', validate);



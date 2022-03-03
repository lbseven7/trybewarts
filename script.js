const inputEmail = document.querySelector(".email");
const inputSenha = document.querySelector(".senha");
const btnLogin = document.querySelector("#btn-login");
const agreement = document.querySelector("#agreement");
const btnSubmit = document.querySelector("#submit-btn");

function validate() {
  if (
    inputEmail.value === "tryber@teste.com" && inputSenha.value === "123456") {
    window.alert("Olá, Tryber!");
  } else {
    window.alert("Email ou senha inválidos.");
  }
}

btnLogin.addEventListener("click", validate);

function btnStatus() {
  if (agreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
agreement.addEventListener("click", btnStatus);

// const counter = Number(document.querySelector('#counter'));
const textArea = document.getElementById("textarea");

function counterArea() {
  // const max = textArea.maxlength; // 500 caracteres
  // const value = textArea.value.length;
  const contador = document.getElementById("counter");
  contador.innerText = 500 - textArea.value.length;
}

textArea.addEventListener("keyup", counterArea);

// btnSubmit.addEventListener('click', (event) => {
//   event.preventDefault();
//   const family = document.querySelector('input[name="family"]:checked');
//   const conteudo = document.querySelector('')
//   const avaliacao = document.querySelector();

// })

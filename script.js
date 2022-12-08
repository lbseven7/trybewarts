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

// obtive ajuda de matheus Liberato

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const comentario = document.getElementById('textarea');
const formulario = document.getElementById('evaluation-form');

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const family = document.querySelector('input[name="family"]:checked'); // seleciona marcado
  const avaliacao = document.querySelector('input[name="rate"]:checked'); // seleciona marcado
  const materias = document.querySelectorAll('.content-selector input[type="checkbox"]:checked');
  const disciplinas = [];

  for (let index = 0; index < materias.length; index += 1) disciplinas.push(` ${materias[index].value}`);

  formulario.innerHTML = `
    Nome: ${nome.value} ${sobrenome.value} <br>
    Email: ${email.value} <br>
    Casa: ${casa.value} <br>
    Família: ${family.value} <br>
    Materias: ${disciplinas} <br>
    Avaliação: ${avaliacao.value} <br>
    Observações: ${comentario.value}`
});

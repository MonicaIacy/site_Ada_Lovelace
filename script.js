const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone")
const formBtn = document.getElementById("formBtn");

formBtn.addEventListener("click", teste)

function teste() {
  if (nome.value != "" && email.value != "" && telefone.value != "") {
    alert("Prontinho! Você receberá as novidades por e-mail.")
  } else {
    alert("Por favor, preencha os campos nome, email e telefone.")
  }
}


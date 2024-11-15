// peguei a entrada do form
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

// ligação com o html
frm.addEventListener("submit", (e) => {
  
  // evita o envio de formulário
  e.preventDefault()

  // transformei a resposta em número
  const n = Number(frm.inNumero.value)d

  // limpa o campo antes
  let resposta = ""

  // calcúlo
  for (let i = 1; i <= 10; i++) {
    resposta = resposta + n + " x " + i + " = " + (n * i) + "\n"
  }

  // saída
  resp.innerText = resposta
})
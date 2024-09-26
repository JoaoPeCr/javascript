// Função de contar
function contar() {

  //pega os valores do form
  var inicio = document.getElementById('inInicio')
  var fim = document.getElementById('inFim')
  var passo = document.getElementById('inPasso')
  var res1 = document.getElementById('res')

  //trasnforma os dados em números
  var ini = Number(inicio.value)
  var final = Number(fim.value)
  var pulo = Number(passo.value)

  // caso o cliente não bote nada
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Algum campo não foi preenchido')
  }

  //cálculo
  for (var contagem = inicio; contagem <= fim; contagem += passo) {
    res1.innerHTML += `${contagem}`
  }
  console.log(`Fim!`)
}
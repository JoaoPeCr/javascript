// Função de contar
function contar() {

  //pega os valores do form
  var inicio = document.getElementById('inInicio')
  var fim = document.getElementById('inFim')
  var passo = document.getElementById('inPasso')
  var res = document.getElementById('res')

  //trasnforma os dados em números
  var ini = Number(inicio.value)
  var final = Number(fim.value)
  var pulo = Number(passo.value)

  if (pulo <0){
    window.alert(`Passo Inválido! Considerando passo: 1`)
    pulo = 1
  }
  // caso o cliente não bote nada
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = `Impossível contar!`
    window.alert('[ERRO] Algum campo não foi preenchido')
  } else {
    res.innerHTML = `Contando: <br>`
    
    //cálculo
    if (ini < final) {
      for (let contagem = ini; contagem >= final; contagem += pulo) {
        res.innerHTML += `${contagem} \u{1F449}`
      }
    } else {
      for (let contagem = ini; contagem >= final; contagem -= pulo) {
        res.innerHTML += `${contagem} \u{1F449}`
      }
    }
    
    //bandeirinha
    res.innerHTML += `\u{1F3C1}`
  }
}
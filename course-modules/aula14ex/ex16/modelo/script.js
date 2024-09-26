//funçao gerar tabuada
function tabuada () {
  // busca o number do formulário
  var fatorA = Number(document.querySelector('#number'))
  var res = document.querySelector('#res')
  //cálculo 
  for (var fatorB = 1; fatorB  <= 10; fatorB++){
    res.innerHTML = (`${fatorA} x ${fatorB} = ${fatorA * fatorB}`)
  }
}
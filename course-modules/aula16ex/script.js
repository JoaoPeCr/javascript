// gerar tabuada
function adicionar() {
  var number = document.getElementById('inNumber')
  var lista = 
  var saida = document.getElementById('saida')

  if (number.value.length == 0) {
    window.alert('[ERRO] Algum campo não foi preenchido')
  } else {
    var n = Number(number.value)
    res.innerHTML = ''
    for
  }
}














// //funçao gerar tabuada
// function tabuada() {

//   //busca o número do formulário
//   var number = document.getElementById('inNumber')
//   var res = document.getElementById('res')

  
//   //alerta caso não preencha nada
//   if (number.value.length == 0) {
//     window.alert('[ERRO] Algum campo não foi preenchido')
//   } else {

//     //transforma em número
//     var n = Number(number.value)
    
//     //limpa o campo antes
//     res.innerHTML = ''
    
//     //calcúlo
//     var c = 1
//     while (c <= 10) {
//       let item = document.createElement('option')  
//       item.text = `${n} x ${c} = ${n * c}`
//       res.appendChild(item)
//       c++
//       res.value = `res${c}`
//     }
//   }
}
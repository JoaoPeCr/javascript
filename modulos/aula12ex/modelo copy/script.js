function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  //var horaAtual = data.getHours()
  var hora = 22
  msg.innerHTML = `Agora são ${horaAtual} hs`
  /*if (hora > 24) {
    //erro
  } else if (hora < 6) {
    //madrugada 
    img.src = 'pexels-george-desipris-858241.jpg'
  } else if (hora <= 12) {
    //manhã
    img.src = 'pexels-artur-roman-158558-1167355.jpg'
  } else if (hora <= 18) {
    //tarde
    img.src = 'pexels-george-desipris-858241.jpg'
  } else {
    //noite
    img.src = 'pexels-george-desipris-858241.jpg'
  } */
 if (hora >= 0 && hora < 12) {
  img.src = 'teste.png'
 } else if (hora >= 12 && hora < 18) {
  img.src = 'teste.png'
 } else {
  img.src = 'teste.png'
 }
} 

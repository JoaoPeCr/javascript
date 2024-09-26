function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} hs`
  if (hora > 24) {
    //erro
    document.body.style.background = '#cc8000'
  } else if (hora < 6) {
    //madrugada 
    img.src = 'pexels-sanaan-3052361.jpg'
    document.body.style.background = '#192928'
  } else if (hora <= 12) {
    //manhã
    img.src = 'pexels-artur-roman-158558-1167355.jpg'
    document.body.style.background = '#D5D3B8'
  } else if (hora <= 18) {
    //tarde
    img.src = 'pexels-george-desipris-858241.jpg'
    document.body.style.background = '#7D5037'
  } else {
    //noite
    img.src = 'pexels-sanaan-3052361.jpg'
    document.body.style.background = '#192928'
  }
} 

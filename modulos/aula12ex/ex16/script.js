//cria o function de verificar.
function verificar() {
  //busca a data.
  var data = new Date()
  //pega o ano da data (fullyear é 4 digitos).
  var ano = data.getFullYear()
  //busca as informações do html.
  var fAno = document.getElementById('ano')
  //mostra o local de saída.
  var res = document.querySelector('div#res')
  //se não digitou o ano OR se o ano for maior que o ano atual.
  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  }//se não..
  else {
    //buscou o sexo do formulário.
    var fsex = document.getElementsByName('sex')
    //transforma o ano em idade.
    var idade = ano - Number(fAno.value)
    var genero = ''
    //cria a imagem.
    var img = document.createElement('img')
    //adiciona um id='foto' no img.
    img.setAttribute('id', 'foto')
    // se masculino..
    if (fsex[0].checked) {
      genero = 'homem'
      if (idade <= 0 && idade < 10) {
        //criança
        //insere a foto no src
        img.setAttribute('src', 'fotocriancahomem.jfif')
      } else if (idade >= 10 && idade < 21) {
        //jovem adolescente
        img.setAttribute('src', 'fotoadolescentehomem.jfif')
      } else if (idade >= 21 && idade < 65) {
        //adulto
        img.setAttribute('src', 'fotoadultohomem.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'fotoidosomulher.jfif')
      }
    } else if (fsex[1].checked) {
      genero = 'mulher'
      if (idade <= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'fotocriancamulher.jfif')
      } else if (idade >= 10 && idade < 21) {
        //jovem adolescente
        img.setAttribute('src', 'fotoadolescentemulher.jpg')
      } else if (idade >= 21 && idade < 65) {
        //adulto
        img.setAttribute('src', 'fotoadultomulher.webp')
      } else {
        //idoso
        img.setAttribute('src', 'fotoidosomulher.jfif')
      }
    }
    //centraliza o texto se já não tiver centralizado.
    res.style.textAling = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('ano')
  var res = document.getElementById('res')
  if (fano.ariaValueMax.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('sex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `idade calculada : ${idade} ` 
  }
}
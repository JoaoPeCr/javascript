var agora = new Date( )
var hora = agora.getHours()
if (hora > 24) {
  console.log(`Erro`);
} else if (hora < 6) {
  console.log(`São ${hora}h da madrugada`);
} else if (hora <= 12) {
  console.log(`São ${hora}h da manhã`);
} else if (hora <= 18) {
  console.log(`São ${hora}h da tarde`);
} else {
  console.log(`São ${hora}h da noite`)
}
  

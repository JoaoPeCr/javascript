const frm = document.querySelector("form"); //obtém elementos da página
const resp1 = document.querySelector("#outPode");
const resp2 = document.querySelector("#outTipo");

frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o envio do form

  //converte dados de entrada
  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);

  //cria condições para exibir a resposta
  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    resp1.innerText = `Lados não pode formar um triângulo`;
  } else {
    resp1.innerText = `Lados podem formar um triângulo`;
    if (ladoA == ladoB && ladoC == ladoA) {
      resp2.innerText = `Tipo: Equilátero`;
    } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
      resp2.innerText = `Tipo: Isóceles`;
    } else {
      resp2.innerText = `Tipo: Escaleno`;
    }
  }
});

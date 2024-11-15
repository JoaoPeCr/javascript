let num = [3, 6, 9, 1, 4, 6]
num.push(8)
num.sort()
console.log(`O vetor tem ${num.length} conteúdos.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
  console.log(`O número não foi encontrado.`)
} else {
  console.log(`O número está na posição ${pos}.`)
}
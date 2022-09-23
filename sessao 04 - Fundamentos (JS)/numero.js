const peso1 = 1.0
const peso2 = Number('2.0') //funcao nativa para receber um numero

/*
console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) //funcao pra saber se é numero inteiro
console.log(Number.isInteger(peso2))
*/

const avalicao1 = 9.751
const avalicao2 = 7.853

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2)

console.log("total: " + total.toFixed(2))
console.log("média: " + media.toFixed(2))
console.log("binario média: " + media.toString(2))
console.log("binario média: " + media.toString(4))
console.log("binario média: " + media.toString(7))
console.log(typeof(media))
console.log(typeof(Number))
//.toString() transforma em String
//.toString(2) passa como valor binario
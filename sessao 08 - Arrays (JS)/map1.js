const nums = [1, 2, 3, 4, 5]

//gerar um array com o valor dobrado do acima
//MAP = um 'for' com propósito
console.log("Original: ", nums)
let resultado = nums.map(e => e * 2)
console.log("Usando .map(): ", resultado)

//O 'MAP' NAO TRANSFORMA O ARRAY ORIGINAL, ELE GERA UM NOVO ARRAY!

//OUTRO...
console.log("\nnums[]: " ,resultado)
const soma10 = e => e + 10
const triple = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triple).map(paraDinheiro)
console.log("após os .map()'s: ", resultado)
const valores = [7.7, 7.8, 6.5, 9.3]
console.log(valores[0], valores[2])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])

valores[6] = 8.5
console.log(valores)

valores[5] = 3
console.log(valores)

console.log("tamanho do array: " + valores.length)
console.log("array: " + valores)
console.log(valores.pop()) // retira o ultimo indice do array
console.log("pop(): " + valores)
//valores.push({id: 13}, false, null, 'teste') // passa para o array

delete valores[2] //deleta o indice indicado do array
console.log("indice 2 removido: " + valores)

console.log("um array é do tipo: " + typeof(valores))
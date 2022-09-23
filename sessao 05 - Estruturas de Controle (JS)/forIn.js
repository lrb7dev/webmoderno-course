//indicado para percorrer um 'array' nao é a mais indicada
//o 'for / in' da os indices do array

const notas = [6, 8.6, 4.3, 1.89, 9]

for (i in notas) {
    console.log('indice [' + i + '] ', notas[i])
}
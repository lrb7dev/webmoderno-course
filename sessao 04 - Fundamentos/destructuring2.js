//DESTRUCTuriNG in ARRAYs

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, , n6 = 0] = [10, 7 , 9, 8]
console.log(n1, n3, n5, n6)

//outro exemplo
//ignora o primeiro array e pega o nº6 no array
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
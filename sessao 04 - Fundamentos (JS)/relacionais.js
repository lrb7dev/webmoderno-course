//relacionais
console.log('1)', '1' == 1) //se é igual
console.log('2)', '1' === 1) // se é extritamente igual
console.log('3)', '3' != 3)
console.log('4)', '3' !== 3) //extritamente diferente
console.log('5)', 2 < 3)
console.log('6)', 2 > 3)
console.log('7)', 2 <= 3)
console.log('8)', 2 >= 3)

const d1 = new Date(0) // '0' é referencia em js -> 01/01/1970
const d2 = new Date(0)
console.log('9)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11', d1.getTime() === d2.getTime())
console.log('12', d1.getTime() == d2.getTime())

console.log('13', undefined === null)
console.log('14', undefined == null)
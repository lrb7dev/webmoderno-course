const quaseArray = { 0: 'Guitarra', 1: 'Bateria', 2: 'baixo' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])
console.log(quaseArray[1])

const meuArray = ['guitarra', 'bateria', 'baixo']
console.log(quaseArray.toString(), meuArray)
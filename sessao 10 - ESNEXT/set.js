//nao aceita repeticao/ nao indexada
const times = new Set()
times.add('Flamengo')
times.add('Palmeiras').add('Corinthians').add('Vasco')
times.add('Cruzeiro')
times.add('Vasco') //nao aceita repeticao

console.log(times) //mostrar set times
console.log(times.size) // tamanho do set
console.log(times.has('vasco')) //retorna false por nao encontrar exato 'Vasco'
console.log(times.has('Vasco')) //retorna true por estar exato 'Vasco'
times.delete('Palmeiras') //deletar
console.log(times.has('Palmeiras')) //retorna false por deletar

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] //nao ira repetir 'Lucas'
const nomesSet = new Set(nomes)
console.log(nomesSet) 


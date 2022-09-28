const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) //incorreta a forma de pegar o valor em 'react'
console.log(tecnologias.get('react').framework) //forma certa de pegar o valor

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

//outras
console.log(chavesVariadas.has(123)) //se a chave existe ou nao
chavesVariadas.delete(123) //deletar do MAP criado
console.log(chavesVariadas.has(123))

//sobreecreve o valor da chave
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
//console.log(chavesVariadas.get(123))
console.log(chavesVariadas)
//criando chaves 
chavesVariadas.set(456, 'c')
console.log(chavesVariadas)
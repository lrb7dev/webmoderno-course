//Object.preventExtensions <-- nao permite criar novos atributos ao Objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 165.55,
    tag: 'promoção'
})

console.log('É EXTENSIVEL? ', Object.isExtensible(produto))

console.log(produto)
produto.nome = 'Borracha' //trocou o valor no atributo 'nome'
console.log(produto)
produto.descricao = 'Borracha cara!'
console.log(produto) //nao adicionou 'descricao'
delete produto.tag
console.log(produto) //deletou o atributo 'tag'

console.log("---------------------------------------")

//Object.seal --> nao consegue ADICIONAR e nem EXCLUIR os atributos, mas consegue MODIFICAR os valores dos atributos
const pessoa = {nome: 'Carla', idade: 32, sexo: 'f'}
Object.seal(pessoa)
console.log(pessoa)
delete pessoa.nome
console.log(pessoa) // nao excluiu 'nome'
pessoa.escolaridade = 'Superior Completo'
console.log(pessoa) // nao adicionou 'escolaridade'
pessoa.nome = 'Sebastião'
pessoa.sexo = 'm'
console.log(pessoa) //modificou os valores em 'nome' e 'sexo'
console.log('Está Selado? ', Object.isSealed(pessoa))

console.log('---------------------------------------------')
//Object.freeze --> Obejto selado com valores constantes
const documentos = {id: 123, cpf:99999999999, nome: 'Pedro'}
Object.freeze(documentos)
console.log('Está CONGELADO? ', Object.isFrozen(documentos))

documentos.nome = 'Henrique'
console.log(documentos) // nao ira mudar o valor em 'nome'
delete documentos.id
console.log(documentos) // nao ira excluir 'id'
documentos.tituloEleitor = 45685698511
console.log(documentos) // nao ira adicionar o attr 'tituloEleitor'
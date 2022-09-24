//pesso --> end:123 --> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa --> end:456 --> {...} ERRO por se CONSTANTE!!
//pessoa = {nome: 'Ana'}

//previne modificacoes 
Object.freeze(pessoa) //o OBETO em sim, passa a ser constante
pessoa.nome = 'Marcelo'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

//exemplo 
const pessoaConstante = Object.freeze({nome: 'Ana'})
console.log(pessoaConstante)
delete pessoaConstante.nome
console.log(pessoaConstante)
// novo recurso ES2015
// DESTRUCTING a partir de um OBJETO

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//recurso destructing -- extraindo de 'pessoa'
const {nome, idade} = pessoa
console.log(nome, idade)

//outro exemplo mas criando uma variavel para receber
const {nome: n, idade: i} = pessoa
console.log(n, i)

//outro exemplo -- com 'undefined'
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

//extraindo de um bloco dentro de outro bloco
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//ERRO: ao tentar acessar algo que nao existe 'conta'
// const {conta:{ag, num}} = pessoa
//console.log(ag, num)
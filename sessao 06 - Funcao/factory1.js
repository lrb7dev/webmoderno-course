//FACTORY é uma funcao que retorna um OBJETO

//FACTORY simples...
function criarPessoa() {
    return {
        nome: 'Jhon',
        sobrenome: "Seena"
    }
}

console.log(criarPessoa())
console.log(typeof criarPessoa())
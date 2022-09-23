//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 200.25

console.log(produto)
//excluindo
delete produto.preco
console.log(produto)

//outro...
const carro = {
    modelo: 'A4',
    valor: 89000,
    //objeto dentro do objeto
    proprietario: {
        nome: 'Raul',
        idade: 56,
        //obejto -> objeto -> objeto
        endereco: {
            logradouro: 'Rua ABC',
            numero: 33
        }
    },
    //um array de objetos dentro do objeto carro
    condutores: [{
        nome: 'Junior',
        idade: 30
    }, {
        nome: 'Caio',
        idade: 15
    }, {
        nome: 'Ana',
        idade: 19
    }],
    //funcao dentro do objeto
    calcularValorDoSeguro: function() {
        console.log("Uma funcao")
    }
}

console.log(carro)
//acrescentar
carro.proprietario.endereco.numero = 999
console.log(carro)
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)
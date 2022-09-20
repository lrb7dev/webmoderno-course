//funcao anonima = funcao sem nome -_-'
const soma = function (x, y) {
    return x + y
}

// o terceiro PARAM recebe 'soma' como DEFAULT
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)// 'soma' esta implicito
imprimirResultado(3, 4, soma) // 'som' esta de forma explicita

//aqui passa a usar a operacao deste funcao anonima
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

//passando resultado de multiplicacao a partir de uma arrow function
//ARROW FUNCTION sempre sera uma FUNCAO ANONIMA
imprimirResultado(3, 4, (x, y) => x * y)

//FUNCAO ANONIMA dentro de um OBJETO -- modo 1
const pessoa = {
    falar: function() {
        console.log("Opa 01!")
    }
}

pessoa.falar()

//FUNCAO ANONIMA dentro de um OBJETO -- modo 2
const pessoa2 = {
    falar() {
        console.log("Opa 02!")
    }
}

pessoa2.falar()
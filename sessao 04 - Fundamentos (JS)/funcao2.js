//armazenando uma FUNCAO DENTRO DE UMA VARIAVEL
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma FUNCAO ARROW em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(3,3))

//RETORNO IMPLICITO - unica setença de codigo - retorna algo
const subtracao = (a, b) => a - b

console.log(subtracao(1, 3))

//outro exemplo
const imprimir2 = a => console.log(a)
imprimir2('legal!')
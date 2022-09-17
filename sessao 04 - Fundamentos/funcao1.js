//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 8)
//caso passe um so valor ficara como 'undefined'
imprimirSoma(3)
//por ter so dois parametros ele ira ignora o resto
imprimirSoma(3, 4, 5, 8, 9,)
//sem parametro 'NaN'
imprimirSoma()


//funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log("com retorno: " + soma(5, 3))
//por ter definido valor no segundo parametro...
console.log(soma(2))
//como primeiro parametro nao foi tratado ele ainda dara 'NaN'
console.log(soma())
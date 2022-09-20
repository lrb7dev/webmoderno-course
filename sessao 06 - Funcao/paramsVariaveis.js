//usando antes do ES2015
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log('sem params: ' + soma())
console.log('passando 1 como params: ' + soma(1))
console.log('passando varios params: ' + soma(1.1, 2.2, 3.3))
console.log('mesclando os params: ' + soma(3.3, 2, ' Teste...'))
console.log('passando so strings: ' + soma(' O', 'n', 'E'))
//estrategia 1 para gerar valor padrao
//terá um problema caso passe '0' por ser '0' valor logico para 'false'
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), 'ira mostrar o 0+0+0= ' + soma1(0, 0, 0))

//estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //pode usar '!=' para condicionar 'null' tambem
    b = 1 in arguments ? b : 1 //se nao houver no indice 1 == b um argumento, preenchera com valor '1'
    c = isNaN(c) ? 1 : c // mais recomendada

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), 'agora ajustado 0+0+0= ' + soma2(0,0,0))

//USANDO VALOR PADRAO DO ES2015
//MUITO MAIS INDICADO
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), 'bem melhor 0+0+0= ' + soma3(0, 0, 0))
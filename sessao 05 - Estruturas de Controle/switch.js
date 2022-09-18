const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log(nota + ' : QUADRO DE HONRA!')
            break
        case 8: case 7:
            console.log(nota + ' : Aprovado!')
            break
        case 6: case 5:
            console.log(nota + ' : Recuperação!')
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log(nota + ' : Reprovado!')
            break
        default:
            console.log(nota + ' : ERRO -> informação inválida')
    }
}

imprimirResultado(10)
imprimirResultado(9.5)
imprimirResultado(8.9)
imprimirResultado(7.5)
imprimirResultado(6.8)
imprimirResultado(5)
imprimirResultado(4)
imprimirResultado(0)
imprimirResultado(-2)
imprimirResultado(8/4)
imprimirResultado(3/20)
imprimirResultado(10-35)
imprimirResultado(11)
/*function notaFinal(nota) {
    if (nota >= 6) {
        console.log(nota + ' : Aprovado!')
    } else {
        if(nota <6 && nota >= 4) {
            console.log(nota + ' : Está de recuperação!')
        } else {
            console.log(nota + ' : Reprovado!')
        }
    }
}


notaFinal(8.3)
notaFinal(6)
notaFinal(5.8)
notaFinal(4)
notaFinal(3.8)
notaFinal(1)

*/

//outro
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log(nota + ' : Aprovado! Quadro de HONRA!')
    } else if (nota.entre(7, 8.99)) {
        console.log(nota + ' : Aprovado!') 
    } else if (nota.entre(6, 6.99)) {
        console.log(nota + ' : Recuperação!')
    } else if (nota.entre(0, 5.99)) {
        console.log(nota + ' : Reprovado!')
    } else {
        console.log(nota + " : ERRO DE LEITURA DE NOTA!")
    }

    console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8.8)
imprimirResultado(6.99)
imprimirResultado(6)
imprimirResultado(5.99)
imprimirResultado(3.86)
imprimirResultado(0)
imprimirResultado(-1)
imprimirResultado(9/3)
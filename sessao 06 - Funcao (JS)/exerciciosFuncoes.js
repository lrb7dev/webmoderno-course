/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

//const notaDCBA = [0.5, 5.1, 7.8, 9.9, -1, 11]

//conceito da nota
conceito = nota => {
    if(nota >= 0 && nota <= 4.9) {
        console.log(`${nota}: (D)`)
    } else if (nota >= 5 && nota <= 6.9) {
        console.log(`${nota}: (C)`)
    } else if (nota >= 7 && nota <= 8.9) {
        console.log(`${nota}: (B)`)
    } else if (nota >= 9 && nota <= 10) {
        console.log(`${nota}: (A)`)
    } else {
        console.log(`${nota} - ERRO - informação incorreta!`)
    }
    
}

//resultado do conceito
function notaConceito(nota) {
    for(let i = 0; i < nota.length; i++) {
        conceito(nota[i])    
    }

}


notaConceito([0.5, 5.1, 7.8, 9.9, -1, 11]) 
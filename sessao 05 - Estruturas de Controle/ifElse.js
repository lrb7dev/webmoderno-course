function notaFinal(nota){
    if(nota >= 6) {
        console.log(nota + ' -> O aluno foi aprovado!')
    } else {
        console.log(nota + ' -> O aluno foi reprovado!')
    }
}

notaFinal(5.9)
notaFinal(6)
notaFinal(7.5)
notaFinal('Reprovadissimo') // cuidado com linguagens fracamente tipadas
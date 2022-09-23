function soBoaNoticia (nota) {
    if (nota >= 7) {
        console.log("Aprovado com nota: " + nota)
    }
}

soBoaNoticia(9)
soBoaNoticia(6.5)

//outro
function seForVerdadeEuFalo(valor){
    //so a var sem condicao, o js entende como 'true' a condicao
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

//undefined é falso, por isso nao mostrara nada
seForVerdadeEuFalo()
seForVerdadeEuFalo('sim')
seForVerdadeEuFalo(3)
//nao ira passa nada por ser 'false'
seForVerdadeEuFalo(false)
//passa por ser 'true'
seForVerdadeEuFalo(true)
//'null' é 'false' nao ira passar
seForVerdadeEuFalo(null)
//'undefined' é 'false' nao ira passar
seForVerdadeEuFalo(undefined)
//faz a subtracao e retorna o valor ´true´
seForVerdadeEuFalo(3-4)
//objeto vazio é 'true'
seForVerdadeEuFalo({})
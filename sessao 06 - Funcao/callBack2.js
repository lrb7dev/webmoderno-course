//gerar um array com todas as notas menores que 7.0
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem CALL BACK
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        //armazena a nota no array 'notasBaixas' vindo de 'notas'
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com CALL BACK
//retorna apenas valores de condicao 'true' passada na funcao anonima 
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//outro exemplo CALL BACK
const notasMenorQue7 = nota => nota < 7 // reutilizavel
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)
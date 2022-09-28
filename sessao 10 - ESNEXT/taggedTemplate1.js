//tagged templates -- processa o template dentro de uma funcao
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Julia'
const situacao = 'Aprovada'
console.log(tag `${aluno} está ${situacao}`)
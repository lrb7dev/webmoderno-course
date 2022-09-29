//sem -promise-
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomesPessoas = []

//callback's aninhadas vao ficando mais complicadas de entender...
getTurma('A', alunos => {
    //console.log(alunos) //listar os dados completos
    nomesPessoas = nomesPessoas.concat(alunos.map(a => `A: ${a.nome}`))
    //console.log(nomesPessoas)
    getTurma('B', alunos => {
        nomesPessoas = nomesPessoas.concat(alunos.map(a => `B: ${a.nome}`))
        //console.log(nomesPessoas)
        getTurma('C', alunos => {
            nomesPessoas = nomesPessoas.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomesPessoas)
        })
    })

})
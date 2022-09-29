//usando -- promise
const { rejects } = require('assert')
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', ()  => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

/*let nomesPessoas = []

//callback's aninhadas vao ficando mais complicadas de entender...
 getTurma('A').then(alunos => {
    nomesPessoas = nomesPessoas.concat(alunos.map(a => `A: ${a.nome}`))
    //console.log(nomesPessoas)
    getTurma('B').then(alunos => {
        nomesPessoas = nomesPessoas.concat(alunos.map(a => `B: ${a.nome}`))
        //console.log(nomesPessoas)
        getTurma('C').then(alunos => {
            nomesPessoas = nomesPessoas.concat(alunos.map(a => `C: ${a.nome}`))
            //console.log(nomesPessoas)
        })
    })

}) */


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))
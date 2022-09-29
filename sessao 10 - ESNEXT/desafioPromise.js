const fs = require('fs') //interagir com o file system
const path = require('path') //trabalhar com o caminho

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

//-----------------------1º o path, 2ºstring do path
const caminho = path.join(__dirname, 'dados.txt') //recebe o caminho do arquivo

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))
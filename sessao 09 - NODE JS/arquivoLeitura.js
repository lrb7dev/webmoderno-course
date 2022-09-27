//'fs' ja vem no NODE
//fs - file system
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono
//ler o arquivo de forma sincrona - com encond utf-8
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
//ler o caminho de forma assincrona com callback
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//ler o arquivo JSON e converter para objeto
const config = require('./arquivo.json')
console.log(config.db.host)

//ler diretorio__assincrona
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})

// '__dirname' ->NODE<- representa o diretorio atual
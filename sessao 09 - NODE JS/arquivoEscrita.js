//chamando 'fs' do NODE
const fs = require('fs')

//objeto
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.30
}

//gerar um arquivo dentro de 'arquivo.json' passando produto como JSON
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})

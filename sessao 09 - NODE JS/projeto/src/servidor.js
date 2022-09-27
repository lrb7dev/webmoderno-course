//escolher porta
const porta = 3003

//imports
const express = require('express') //chamando express
const app = express()
const bancoDeDados = require('./bancoDeDados') //chamando bancoDeDados.js
const bodyParser = require('body-parser')

//retornar funcao middleware fazendo um parser no body da requisicao
//app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


//padrao middleware -- chamando produtos
app.get('/produtos', (req, resp, next) =>{
    resp.send(bancoDeDados.getProdutos) //converte para JSON
})

//padrao middleware -- chamando um produto
app.get('/produtos/:id', (req, resp) => {
    resp.send(bancoDeDados.getProduto(req.params.id))
})

//padrao middlware -- salvar novo produto
app.post('/produtos', (req, resp, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    resp.send(produto) // converte em JSON
})

//saber se esta rodando o servidor
app.listen(porta, () =>{
    console.log(`Servidor está executando na porta ${porta}`)
})
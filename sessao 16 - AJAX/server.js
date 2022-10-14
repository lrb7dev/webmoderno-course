//responsavel por fazer parser do body da requisicao
const bodyParser = require('body-parser')
//
const express = require('express')
const app = express() //instanciar o express

//middlewares
//prover os arquivos estaticos da pasta 'sessao 16 - AJAX'
app.use(express.static('.'))
//codifica a URI substituindo cada instância de certos caracteres
app.use(bodyParser.urlencoded({ extended: true}))
//quando vier um JSON ira transformar em objeto
app.use(bodyParser.json())
//quando vier uma get para /test
//app.get('/teste', (req, res) => res.send(new Date))


//interpretar formulario que veio do arquivo de upload
const multer = require('multer')
//personalizar
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalmente}`)
    }
})
//interpretar upload a partir da requisicao
const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro!')
        }

        res.end('Concluído com sucesso!')
    })
})


//para receber dados da pagina
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})



//testando
app.listen(55375, () => console.log('Executando...'))
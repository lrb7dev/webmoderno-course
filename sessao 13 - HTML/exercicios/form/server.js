const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//passar todos os dados do formulario
app.use(bodyParser.urlencoded({ extended: true}))


app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>SUCESSO!</h1>')
})

//porta
app.listen(3003)
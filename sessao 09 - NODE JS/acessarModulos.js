const moduloA = require('./pastaA/moduloA')
console.log(moduloA.ola)


/*
criando/usando 'index.js' é possível chamar sem precisar de colocar o
nome do arquivo dentro daquele modulo
*/
const c = require('./pastaC')
console.log(c.ola2)


//modulos core - modulos que vem no NODE
/*const http = require('http')
http.createServer((requisicao, resposta) => {
    resposta.write('Ola, tudo bem?\n')
    resposta.end('Ate mais!')
}).listen(8080)
*/
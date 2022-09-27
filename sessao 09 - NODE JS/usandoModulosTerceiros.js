/*
*no terminal: npm i lodash
*/
/**
 * no terminal, instalacao global: npm i -g nodemon
 * aplicacao rodando tempo real enquanto edita
 */

//biblioteca, assim como o 'axios'
const _ = require('lodash')

//funcao do lodash -> ..._.random((minNumber, maxNumber), numberOverload)
setInterval(() => console.log(_.random(2, 30)), 2000)
//UMA UNICA INSTANCIA
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//NOVAS INSTANCIAS CRIADAS A PARTIR DE UMA FACTORY
const contadorC = require('./instanciaNova')() //'()' <-- invocando a funcao
const contadorD = require('./instanciaNova')() //'()' <-- invocando a funcao


/*
por fazer cache, em contadorB.valor recebera o valor da ultima acao realizado por contadorA
*/
console.log('contadorA: ', contadorA.valor)
contadorA.inc()
console.log('contadorA: ', contadorA.valor)
contadorA.inc()
console.log('contadorA: ', contadorA.valor)
console.log('contadorB: ', contadorB.valor)

console.log('================\n')

// nao modifica 'contadorD' por ser um funcao invocada
for (let i = 1; i <= 4; i++) contadorC.inc()
console.log('contadorC: ', contadorC.valor)
console.log('contadorD: ', contadorD.valor)


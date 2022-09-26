//formas modos de exportar
//checando...
console.log(module.exports === this)
console.log(module.exports === exports)

//exemplo
this.a = 1
exports.b = 2
module.exports.c = 3

//mesmo mudando a referencia de 'exports' ele ira retornar
//o que ja lhe foi passado acima
exports = null
console.log(module.exports)

//mesmo mudando novamente a referencia
exports = {
    nome: 'Teste'
}

console.log(module.exports)
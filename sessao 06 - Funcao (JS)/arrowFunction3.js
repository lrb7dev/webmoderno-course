/*
um 'this' com a funcao arrow esta associado a funcao que foi escrita
*/
let comparaComThis = function (param) {
    console.log(this === param)
}

//'THIS em FUNCAO -> aponta para  global
comparaComThis(global)

//aponta agora para obj por conta do 'bind'
const obj = {}
comparaComThis = comparaComThis.bind(obj)
//'THIS com BIND em obj nao continua apontando para GLOBAL 
comparaComThis(global)
//THIS passa a apontar para obj por causa do BIND
comparaComThis(obj)


console.log("\nEXEMPLO COM ARROW FUNCTION: ")
//com ARROW FUNCTION nao aponta para GLOBAL
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // esta apontando para o modulo

comparaComThisArrow = comparaComThisArrow.bind(obj) // nao ira apontar para o 'obj'
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

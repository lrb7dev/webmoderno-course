/**
 * ---------- ARROW FUNCTION --------
 * forma mais reduzida para criar funcoes
 * funcao anonima, passada para uma variavel
 * return implicito sem chaves
 * com chaves precisa de return explicito
 */

//retorno implicito
const soma1 = (a, b) => a + b 
console.log(soma1(2, 3))
//retorno explicito
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(3, 3))

//---------- ARROW FUNCTION (this) ------------
/**
 * THIS apontando pra funcao onde foi criada
 */

//--------------- PARAMETRO DEFAULT ----------------
function log(texto = 'Padrao') {
    console.log(texto)
}
log() //assume o valor padrao
//log(undefined) //assume o valor padrao
//log(null) //assume null
//log('Outro texto') //passa novo valor

//-------- REST/juntar(...) ---------------
//argrupa parametros em uma estrutura array
function exemploRest(...numeros) {
    console.log(typeof numeros, numeros)
    
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(exemploRest(2, 3, 5))
console.log(exemploRest(1, 2, 3, 4, 5))
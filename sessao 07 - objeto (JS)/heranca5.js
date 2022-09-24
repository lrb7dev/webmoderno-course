//ou seja... eles tem um '.prototype'
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Number)
console.log(typeof Object)
console.log("------------------------------\n")

//funcao que inverte as posicoes
String.prototype.reverse = function() {
    //..separa em array...inverte...e junta
    return this.split('').reverse().join('')
}

console.log('Essa frase está ao contrário!'.reverse())

//outro exemplo: pegar o primeiro indice do array
//'first' nao existe e esta sendo criado
Array.prototype.first = function() {
    return this[0]
}

//retornando...
console.log([1,2,3,4].first())
console.log(['a','b','c','d'].first())

/*voce pode sobreescrever comportamento
de funcoes ja existentes... NAO INDICADO!!!!
*/
/*
String.prototype.toString = function() {
    return 'Lascou tudo!'    
}

//pegar o 'lascou tudo' e nao 'tentativa' e ira reverter
console.log('Tentativa...'.reverse()) 
*/
//uma var sofre içamento-hoisting
/*
inicialmente a var nao foi declarada,
porem abaixo foi, ocorrido isso a var
sofre o hoisting(içamento) como se estivesse
acontecido assim:
var a
console.log('a = ' + a)
a = 2
console.log('a = ' + a)
*/
console.log('a = ' + a)
var a = 2
console.log('a = ' + a)

//tambem sofre içamento dentro da função
function teste() {
    console.log('a = ' + a)
    var a = 2
    console.log('a = ' + a)
}

teste()

// !!!NOTA: nao ha motivo para usa-la assim!


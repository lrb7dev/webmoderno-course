//'thi' aponta para 'module.exports'
console.log('\n------------[THIS - no modulo]--------------')
console.log('THIS === global: ', this === global)
console.log('THIS === module: ', this === module)

console.log('THIS ==== module.exports: ', this === module.exports)
console.log('THIS === exports: ', this === exports)

console.log('\n-----------[THIS - na funcao tradicional]------------')
//CUIDADOS...
//o THIS em uma funcao tradicional
function logThis() {
    console.log('THIS === exports -> dento de uma funcao? ', this === exports)
    console.log('THIS === module.exports -> dentro de uma funcao? ', this === module.exports)
    console.log('THIS === global -> dentro de uma funcao? ', this === global)
}

logThis()
console.log('\n-------------[THIS - na ARROW FUNCTION]----------------')
//o THIS em uma ARROW FUNCTION
logThis2 = () => {
    console.log('THIS === exports? -> dentro de uma ARROW FUNCTION?', this === exports)
    console.log('THIS === module.exports -> dentro de uma ARROW FUNCTION? ', this === module.exports)
    console.log('THIS === global -> dentro de uma ARROW FUNCTION? ', this === global)
}

logThis2()
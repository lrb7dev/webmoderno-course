let dobro = function (a) {
    return 2 * a
} 

//sobreescrevendo com ARROW FUNCTION
//ES2015
dobro = (a) => {
    return 2 * a
}

//sobreescrevendo com forma reduzida
// 1 param -- return implicito
dobro = a => 2 * a

console.log(dobro(Math.PI))

// OUTRO EXEMPLO
ola = () => 'Ola!'
// ola = _ => 'Ola!'
console.log(ola())
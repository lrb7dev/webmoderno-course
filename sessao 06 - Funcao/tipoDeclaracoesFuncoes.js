console.log(soma(3, 3))

//pode chamar a funcao antes
//FUNCTION DECLARATION
function soma(x, y) {
    return x + y
}

//FUNCTION EXPRESSION
//so pode chamar a funcao apos criada
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 3))

//NAMED FUNCTION EXPRESSION
//pouco usada - vantagem ao debuggar, pois mostra o nome da function -
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 3))
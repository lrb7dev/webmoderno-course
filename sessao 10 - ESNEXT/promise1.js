const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento) //arrayOuString[0] = 'Ana'
    .then(primeiroElemento) //novamente agora = [0]'A', [1]'n', [2]'a'
    .then(letraMinuscula)//passa 'A' para 'a'
    .then(console.log)//mostra na tela
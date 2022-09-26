const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//filtrar chineses
const chineses = f => f.pais === 'China'
//filtrar mulheres
const mulheres = f => f.genero === 'F'
//para sempre passar para 'reduce' o maior salario
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    //mulher chinesa com maior salario
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

        console.log(func)

})


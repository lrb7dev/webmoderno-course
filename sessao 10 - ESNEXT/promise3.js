function gerarNumerosEntre(min, max) { //dois params: min e max
    //trocar o min pelo max se ele for maior
    if(min > max) { 
        [max, min] = [min, max]
    }

    //retornando o new Promise
    return new Promise(resolve => {
        const fator = max - min + 1
        //transformar em integer e depois multiplicar numero aleatorio 0,... pelo fator e depois somar +1 para nao cair do minimo caso
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio) //chama os then
    })

}

gerarNumerosEntre(1,100)
    //.then(num => num * 11) //multiplicador
    .then(numX10 => `O número gerado foi o nº${numX10}`) //atribui a string
    .then(console.log)//referencia
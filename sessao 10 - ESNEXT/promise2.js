function esperarPor(tempo = 2000) { //params padronizado para 2s
    return new Promise(function(resolve) { //passando --resolve-- values
        setTimeout(function() { //abrindo uma function para setTimeOut
            console.log('Executando promise...') //mostrar na tela
            resolve() //para chamar os  '.then'
        }, tempo) //tempo setado no params da function dentro do retorno da Promise
    })
}

//chama a funcao
esperarPor()
    .then(() => esperarPor()) //chama outra vez
    .then(esperarPor) //como nao vai receber nenhum parametro, passa a referencia da funcao
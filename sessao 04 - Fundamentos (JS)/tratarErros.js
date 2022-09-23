function tratarErroELancar(erro) {
    //trhow new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    //console.log(obj.name.toUpperCase() + "!!!!")
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Fim!')
    }
}

const obj = { nome: 'Roberto'} // aqui esta o erro, por conta de 'nome' e nao 'name'
imprimirNomeGritado(obj)
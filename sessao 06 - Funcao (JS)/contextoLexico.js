const valor  = 'Global'

//procura dentro do escopo lexico em que ela foi definida
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
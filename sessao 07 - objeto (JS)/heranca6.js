function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo!', 123)
const aula2 = new Aula('Até breve!', 456)

console.log(aula1, aula2)

//simulando o operador 'new'
//nova funccao com paramtros: (funcao, conjunto de parametros)
function novo(f, ...params) {
    const obj = {} // criando um novo objeto
    obj.__proto__ = f.prototype // associando o prototipo do obj ao prototype da funcao passando em cima como parametro
    f.apply(obj, params) //aplicando em 'f' o objeto criado e o conjunto de parametros
    return obj //retorna o objeto criado
}

//testando...
const aula3 = novo(Aula, 'Bem vindo!', 123)
const aula4 = novo(Aula, 'Até mais!', 456)
console.log(aula3, aula4)
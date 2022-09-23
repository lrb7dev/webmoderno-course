function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

}

//com valores padroes em 'Carro'
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

//passando novos params em 'Carro'
const ferrari = new Carro(350, 25)
for (let i = 0; i < 5; i++) ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
//ultrapassando 'velocidadeMaxima'
for (let i = 0; i < 25; i++) ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
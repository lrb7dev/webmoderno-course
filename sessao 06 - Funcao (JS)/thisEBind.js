const pessoa = {
    saudacao : 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() 
const falar = pessoa.falar
falar() // conflito entre paradigma: funcional e O.O.

//metodo para amarrar o objeto a uma funcao
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

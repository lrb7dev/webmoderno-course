//FUNCAO em JS é First-Classe Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() {}

//armazenar em uma variavel
const fun2 = function() {}

//armazenar em um array
const exemploArray = [function (a,b) { return a + b}, fun1, fun2]
console.log(exemploArray[0](6,3))

//armazenar em um atributo de objeto
const obj = []
obj.falar = function() { return 'Opa!'}
console.log(obj.falar())

//passar funcao como parametro
function run(fun) {
    fun()
}

run(function() {console.log('Executando...')})

//uma funcao pode retornar/conter uma outra funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

//chamar dessa forma
soma(3, 4)(7)
//ou chamar dessa forma
const chamarOutraForma = soma(3, 4)
chamarOutraForma(7)
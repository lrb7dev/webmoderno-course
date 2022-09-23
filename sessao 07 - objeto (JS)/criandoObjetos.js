//usando a notacao literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//FUNCOES CONSTRUTORAS
function Produto(nome, preco, desc) {
    this.nome = nome //criou como GLOBAL 'this' -- PUBLIC
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }

}

const p1 = new Produto('BMW', 250000, 0.15)
const p2 = new Produto('AUDI', 189000, 0.30)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//FUNCAO FACTORY
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Obect.create
const filha = Object.create(null)
filha.nome = 'Serafim'
console.log(filha)

//uma funcao famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)
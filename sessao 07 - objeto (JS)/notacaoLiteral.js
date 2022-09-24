const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //antigo
const obj2 = {a, b, c} //novo
console.log(obj1, obj2)

//outro
const nomeAtr = 'nota'
const valorAtr = 95.66

const obj3 = {}
obj3[nomeAtr] = valorAtr
console.log(obj3)

//ES6
const obj4 = {[nomeAtr]: valorAtr}
console.log(obj4)

//antiga
const obj5 = {
    funcao1: function() {
        //...
    },
    //ES6
    //forma reduzida para criar funcoes
    funcao2() {
        //...
    }
}

console.log(obj5)


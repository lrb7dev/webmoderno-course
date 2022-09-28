//---- ES8: Object.values e Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//======= melhorias na notação literal =========
const nome = 'Carla'
const id = 1
const pessoa = {
    id,
    nome,
    ola() {
        return 'Olá!!!'
    }
}


console.log(`Nome = ${pessoa.nome}
id = ${pessoa.id}
${pessoa.ola()}`)


//========== CLASS ================
class Animal {}

class Cachorro extends Animal {
    dog() {
        return 'Rufff, rufff!!!'
    }
}

console.log(new Cachorro().dog())

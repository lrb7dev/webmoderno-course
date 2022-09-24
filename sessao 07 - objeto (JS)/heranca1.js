const ferrari = {
    modelo: 'F40',
    velocidade: 324
}

const volvo = {
    modelo: 'V40',
    velocidade: 200
}

//acessa o PROTOTIPO de 'ferrari'...
console.log(ferrari.prototype) //nao tem esse atributo
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(ferrari.__proto__ === volvo.__proto__)
console.log(Object.prototype.__proto__ === null) //mais alta hierarquia

console.log("....................................\n")

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
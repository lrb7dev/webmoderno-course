//CADEIA DE PROTOTIPOs (prototype chain)

Object.prototype.attrZ = 'Z' //NAO é indicado fazer ISSO!!!

const avo = {attr1: 'A', attrAzinho: 'Azinho'}
const pai = {__proto__: avo, attr2: 'B', attrAzinho:'Bzinho'}
const filho = {__proto__: pai, attr3: 'C'}

//procurando os atributos - attr1 é de avo
console.log(filho.attr1)
//procurando os atributos - att2 é de pai
console.log(filho.attr2)
//undefined por nao existir neles
console.log(filho.attr0)
//'Z' em Object.prototype <--- maior na escala de herança
console.log(filho.attrZ)
//para quando acha o primeiro atributo, nao pulando para o proximo [[PROTOTYPE]]
console.log(filho.attrAzinho)

console.log("=================================")

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    }, 
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing --- sombreando 'velMax' em 'carro'
}

const volvo = {
    modelo: 'V40',
    status() {
        // super. == referencia o prototipo
        return `${this.modelo}: ${super.status()}`
    }

}

//estabelecendo a relacao entre objetos
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

//estourando a velMax permitida
volvo.acelerarMais(300)
console.log(volvo.status())


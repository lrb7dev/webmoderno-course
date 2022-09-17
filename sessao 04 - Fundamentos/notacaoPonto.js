console.log(Math.ceil(6.1)) // arredondamento

const obj1 = {}
obj1.nome = 'Bola 1'
//obj1['nome'] = 'Bola 2' 

console.log(obj1.nome)

//outro
function Obj(nome){
    //o 'this' a torna publica
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('computador')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
const pai = { nome: 'Pedro', corCabelo: 'preto'}

//cria apontando para o prototipo mencionado
const filha1 = Object.create(pai)
console.log(filha1)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' //nao ira sobreescrever por conta do 'writable' acima
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


//saber se  veio ou nao por herança
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
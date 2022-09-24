const pessoa = {
    nome: 'Adrian',
    idade: 13,
    peso: 22.500
}

//ler chaves do objeto
console.log(Object.keys(pessoa))
//ler valores do objeto
console.log(Object.values(pessoa))
//ler array com seus 'sub-arrays' do objeto
console.log(Object.entries(pessoa))
//percorrer o array
//.............................usando DESTRUCTURING
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
//definir caracteristicas de uma propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, //se pode ser listada
    writable: false, // se pode ser sobrescrita
    value: '01/01/2019'
}) 

pessoa.dataNascimento = '15/03/1965'
console.log(pessoa.dataNascimento)

//listando
console.log(Object.keys(pessoa))

//ES6
//concatenar objetos
const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c:3, a: 4}
//concatencao de objetos -- ira sobreescrever o 'a'
const obj = Object.assign(destino, o1, o2)
console.log(obj)


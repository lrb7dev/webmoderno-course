// ------ let e const --------
{
    var a = 2
    let b = 3
    const c = 4
}

console.log(a)
/*
b is not defined
neste caso, LET so esta disponivel dentro do escopo em que ela foi criada
*/
//console.log(b) 
//b is not defined --- o mesmo vale para CONST
//console.log(c)

//------- Template String -----
const produto = 'iPad'
console.log(`${produto}
é
caro!`)

//---- DESTRUCTURING -----
const [pa, la, v, ...ra] = 'Destructuring'
console.log(pa, la, v, ra)
console.log(`pa[] = ${pa}, 
la[] = ${la}, 
v[] = ${v}
ra[] = ${ra}`)

const [x, , z] = [1, 2, 3]
console.log(`x[] = ${x} e z[] = ${z}`)

const {idade: i, nome} = {nome: 'Carla', idade: 19}
console.log(`idade:i = ${i} e nome = ${nome}`)
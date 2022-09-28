//======== operador REST/juntar SPREAD/espalhar

//usar spread como objeto
const funcionarios = {id: 1, nome: 'Pedro', cargo: 'Programador C#'}
const clone = {ativo: true, ...funcionarios}
console.log('funcionarios: ', funcionarios)
console.log('clone: ', clone)

//usar spread com array
const grupoA = ['Roda', 'Pneu']
const grupoB = ['Motor', 'Ignição', ...grupoA]
const grupoFinal = [...grupoB, 'Câmbio automático']
console.log(grupoA)
console.log(grupoB)
console.log(grupoFinal)
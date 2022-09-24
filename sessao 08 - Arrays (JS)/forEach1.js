const elos = ['Diamante', 'Plantina', 'Ouro', 'Prata', 'Bronze', 'Ferro']

//percorrendo o array
//tres parametros em forEach(nome, inidice, array)
elos.forEach(function(nome, indice /*,array*/){ 
    console.log(`${indice + 1}) ${nome}`)
    //console.log(array)
})

console.log("\n")

//apenas os nomes
elos.forEach(nome => console.log(nome))
//outro modo
console.log('\n')
const elos2 = elos.forEach(nome => console.log(nome))

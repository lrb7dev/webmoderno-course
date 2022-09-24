//objeto
//estrutura dinamica e nao estatica - como em outra linguagens -
//estrutura heterogenea -- por conta da linguagem fracamente tipada do JS
//é aconselhavel por boas praticas trabalhar com array homogeneo
console.log(typeof Array, typeof new Array, typeof [])

//forma nao tao recomendada de criar um array
let nomes = new Array('Ana', 'Carla', 'Ester')
console.log(nomes)

let aprovados = ['Ana', 'Carla', 'Ester']
console.log(aprovados)
console.log(`
aprovados[0] = ${aprovados[0]}
aprovados[1] = ${aprovados[1]}
aprovados[2] = ${aprovados[2]}
aprovados[3] = ${aprovados[3]} <-- nao existe
`)

aprovados[3] = 'Agora existe'
console.log(`aprovados[0] = ${aprovados[0]}
aprovados[1] = ${aprovados[1]}
aprovados[2] = ${aprovados[2]}
aprovados[3] = ${aprovados[3]} 
`)

//mais indicado para adicionar
aprovados.push('Pedrinho')
console.log('Tamanho do array: ' + aprovados.length)
console.log(aprovados)

//adicionado fora de sequencia de ordem
aprovados[9] = 'Beatriz'
console.log("itens vazios do indice [5],[6],[7] e [8]: " + aprovados)
console.log("tamanho do array agora: " + aprovados.length)

//ordena o array 
aprovados.sort()
console.log(`Ordenado:
${aprovados}`)

//excluir indice do array
//nao ordena o array = coloca UNDEFINED naquele indice de valor deletado
delete aprovados[2]
console.log(`Deletado [2]:
${aprovados}`)

//metodo SPLICE ----- superflexivel
//adicionar / remover / adicionar e remover ao mesmo tempo
aprovados = ['nova pessoa', 'outra pessoa', 'mais uma pessoa']
console.log(aprovados)
aprovados.splice(1,1) // indice [1] excluo ate o indice [1]
//aprovados.splice(1,2)
console.log(aprovados)
//adicionando
aprovados.splice(2, 2, 'Mais um Adicionado', 'Outro Adicionado')
console.log(aprovados)
//adicionar a partir de outro indice
aprovados.splice(1, 0, 'Adicionando Mais um')
console.log(aprovados)

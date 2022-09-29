linha = () => console.log("===================================\n")

//iteira em cima de valores
for (let letra of 'developer') {
    console.log(letra)
}
linha()

//percorre em cima de indices
const arrayA = ['dois', 3, 0, 'b', true]
for(let i in arrayA) {
    console.log(i)
}
linha()

//percorre os valores
for(let i of arrayA) {
    console.log(i)
}
linha()

//
const assuntosMap = new Map([
    ['Map', {abordado: true }],
    ['Set', {abordado: true }],
    ['Promisse', {abordado: false}]
])

//por objeto
for (let assunto of assuntosMap) {
    console.log(assunto)
}

//por chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

//por valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
} 

//receber chave e valor separados
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + "!"

//neste caso considera as quebras de linha na string
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)   

//expressoes
console.log(`2 + 2 = ${3 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
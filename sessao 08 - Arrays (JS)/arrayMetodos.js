const lol = ['Lux', 'Pyke', 'Lissandra', 'Poppy']

console.log(`Antes de .pop(): ${lol}`)
lol.pop() //remove o ultimo indice do array
console.log(`Depois de .pop(): ${lol}\n`)

console.log(`Antes de .push(): ${lol}`)
lol.push('Miss Fortune') //adiciona elemento no array
console.log(`Depois de .push(): ${lol}\n`)

console.log(`Antes de .shift(): ${lol}`)
lol.shift() //remove o primeiro elemento do array
console.log(`Depois de .shift(): ${lol}\n`)

console.log(`Antes de .unshift(): ${lol}`)
lol.unshift('Blitzcrank') //adiciona novo elemento no começo do array
console.log(`Depois de .unshift(): ${lol}`)

//splice pode adicionar e remover elementos de um array
console.log(`Antes de .splice(): ${lol}`)
lol.splice(2, 0, 'Urgot', 'Malzahar') // adicionando apos [1] sem remover niguem
console.log(`Depois de .splice(): ${lol}`)
console.log(`Antes de .splice(): ${lol}`)
lol.splice(2,1) //excluindo o [2] somente
console.log(`Depois de .splice(): ${lol}`)
console.log(`Antes de .splice(): ${lol}`)
lol.splice(3,3, 'Shen') //remover [3] e [4] e adicionar [3] = 'shen'
console.log(`Depois de .splice(): ${lol}`)

//com SLICE --- retorna a copia do Objeto original
console.log(`Antes de .slice(): ${lol}`)
const algunsLOL = lol.slice(2) //novo array a partir do [2]
console.log(`novo array com .slice(): ${algunsLOL}`)

console.log(`Antes de .slice(): ${lol}`)
const algunsLOL2 = lol.slice(1,4)
console.log(`novo array com .slice(): ${algunsLOL2}`)

/*
NOTA:
-------> O 'SPLICE' ALTERA O OBJETO ORIGINAL
-------> O 'SLICE' RETORNA UMA COPIA DO OBJETO ORIGINAL
*/
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unario

    //ES2015
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

//teste
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))
console.log(compras(false, true))
/*
14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.

*/

//console.log("RESPOSTA 14:\n")

function recebeFruta(fruta) {
    switch(fruta) {
        case 'maçã': case 'maca': case 'maça': case 'macã':
            console.log(`${fruta} : Não vendemos esta fruta aqui! `)
            break
        case 'kiwi':
            console.log(`${fruta} : Estamos com escassez de kiwis!`)
            break
        case 'melancia': 
            console.log(`${fruta} : Aqui está, são 3 reais o quilo!`)
            break
        default:
            console.log(`${fruta} : ERRO - fruta não encontrada!`)
            break
    }

}


recebeFruta('maca')
recebeFruta('maçã')
recebeFruta('maçãs')
recebeFruta('melancia')
recebeFruta('kiwi')
recebeFruta('abacate')




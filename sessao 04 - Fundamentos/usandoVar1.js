//ficara visivel dentro e fora de um bloco
{
    {
        {
            {var sera = 'Será???'}
            console.log(sera)
        }
    }
}
console.log(sera)

//outro
//quando cria um variavel fora de uma funcao ela é global
//desvantagem: problemas maiores possiveis caso seja sobrescrito por alguem
var c = 1 //variavel global

//dentro de um escopo de uma function
function teste() {
    var local = 123
    console.log(local)
}

teste()



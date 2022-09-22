//Curso Web Moderno - Exercícios Javascript
/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/
console.log('RESPOSTA 01: \n')
function operacoes(x, y) {
    console.log(`${x} + ${y} = ${x + y}`)
    console.log(`${x} - ${y} = ${x - y}`)
    console.log(`${x} x ${y} = ${x * y}`)
    console.log(`${x} ÷ ${y} = ${x / y}`)
    //poderia colocar em um unico 'console.log()' tambem
}

operacoes(3,5)
console.log('.............................................................')
/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/
console.log('RESPOSTA 02: \n')
let tipoTriangulo

function tamLadosTriangulo(x, y, z) {
    if (x == y && x != z && y != z) {
        tipoTriangulo = 'O triângulo é Isósceles!'
        //console.log('O triângulo é Isósceles!')
    } else if (x == z && x != y && z != y) {
        tipoTriangulo = 'O triângulo é Isósceles!'
        //console.log('O triângulo é isósceles!')
    } else if (y == z && y != x && z != x) {
        tipoTriangulo = 'O triângulo é Isósceles!'
        //console.log('O triângulo é isósceles!')
    } else if (x == y && x == z) {
        tipoTriangulo = 'O triângulo é equilátero!'
        //console.log('O triângulo é equilátero!')
    } else {
        tipoTriangulo = 'O triângulo é escaleno!'
        //console.log('O triângulo é escaleno!')
    }
    
    return tipoTriangulo
}

//tamLadosTriangulo(3,3,3)
console.log('[1] [1] [2] = ' + tamLadosTriangulo(1, 1, 2))
console.log('[1] [2] [1] = ' + tamLadosTriangulo(1, 2, 1))
console.log('[2] [1] [1] = ' + tamLadosTriangulo(2, 1, 1))
console.log('[1] [1] [1] = ' + tamLadosTriangulo(1, 1, 1))
console.log('[1] [2] [3] = ' + tamLadosTriangulo(1, 2, 3))

console.log('.............................................................')
/*
3) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

console.log('RESPOSTA 3: \n')

function exponenciacao(base, expoente) {
    let resultado = Math.pow(base, expoente)
    return console.log(`${base} elevado à ${expoente} = ${resultado}`)
}

exponenciacao(2,2)
exponenciacao(3,2)
exponenciacao(3,3)

console.log('.............................................................')
/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

console.log('RESPOSTA 04: ')

let resultadoDivisao = (dividendo, divisor) => {
    resultDiv = dividendo / divisor
    resultRestoDiv = dividendo % divisor
    
    return console.log(`
    O resulado de ${dividendo} ÷ ${divisor} = ${resultDiv}
    O resto da divisão é ${resultRestoDiv}
    -->`)

}

resultadoDivisao(3,3)
resultadoDivisao(9,3)
resultadoDivisao(5,3)
resultadoDivisao(-6,3)

console.log('.............................................................')
/*
05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto)
*/

console.log('RESPOSTA 05 - incompleta')

function arredondarDinheiro(valor) {
    //formatando para duas casas decimas
    const arredondaNum = valor.toFixed(2)
    //console.log(arredondaNum)

    //passando para R$##,##
    return arredondaNum.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
}

console.log(arredondarDinheiro(0.356))

console.log('.............................................................')
/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

console.log('RESPOSTA 06: ')

jurosSimples = (capitalInicial, taxaJuros, tempo) => {
    const juroSimp = capitalInicial * taxaJuros * tempo
    return juroSimp.toFixed(2)
}

jurosCompostos = (capitalInicial, taxaJuros, tempo) => {
    const i = 1 + taxaJuros
    const taxa = Math.pow(i, tempo)
    const juroComp = capitalInicial * taxa
    return juroComp.toFixed(2)
}

//juros simples
let juroS = jurosSimples(35, 0.15, 10)
console.log(juroS)

//juros compostos
let juroC = jurosCompostos(35, 0.15, 10)
console.log(juroC)

console.log('.............................................................')
/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

console.log("RESPOSTA 10: \n")

divisivelPorTres = num => {
    const dif = num % 3
    if(dif == 0) {
        return true
    } else {
        return false
    }
}  

console.log('3 é divisível por 3 [' + divisivelPorTres(3) + "]")
console.log('12 é divisível por 3 [' + divisivelPorTres(12) + "]")
console.log('-9 é divisível por 3 [' + divisivelPorTres(-9) + "]")
console.log('4 é divisível por 3 [' + divisivelPorTres(4) + "]")
console.log('13 é divisível por 3 [' + divisivelPorTres(13) + "]")
console.log('-11 é divisível por 3 [' + divisivelPorTres(-11) + "]")

console.log('.............................................................')
/* 
12) Faça um algoritmo que calcule o fatorial de um número.
*/

console.log("RESPOSTA 12: ")

function factorial(num) {

    //armazenar a list de fatorial
    const factorialList = []
    let num2 = num

    for (let i = 0; i < num; i++ ) {
        
        factorialList[i] = num2
        num2--
    }
    
    //condicao para fatorar
    if (num < 0) {
        console.log(`${num}! = Números negativos não são fatorados!`)
    } else if (num == 0 || num == 1) {
        console.log(`${num}! = 1`)
    } else {
        let factorialResult = 1
        for (let i = 0; i < num; i++) {
            factorialResult *= factorialList[i]
            //console.log(factorialResult)
        }
        console.log(`${num}! = ${factorialResult}`)
    }

    
}

factorial(10)
factorial(7)
factorial(-1)
factorial(0)
factorial(1)
factorial(3)

console.log('.............................................................')
/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

console.log("RESPOSTA 13:\n")

function diaDaSemana(dia) {
    switch(dia) {
        case 1: case 7:
            console.log(`${dia} : fim de semana!`)
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log(`${dia} : dia útil`)
            break
        default:
            console.log(`${dia} : informação inválida!`)
            break    
    }
}

diaDaSemana(1)
diaDaSemana(2)
diaDaSemana(3)
diaDaSemana(4)
diaDaSemana(5)
diaDaSemana(6)
diaDaSemana(7)
diaDaSemana(0)
diaDaSemana(-2)
diaDaSemana(8)
diaDaSemana(99)
diaDaSemana(4-3)
diaDaSemana()
diaDaSemana(true)

console.log("...............................................")

/*
14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.

*/

console.log("RESPOSTA 14:\n")

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





linha = () => console.log('===============================\n')

/*
1) Crie uma função que retorna a string "Olá, " concatenada com um argumento text 
(a ser passado para a função)
 e com ponto de exclamação "!" no final.
 */

 console.log('RESPOSTA 01: \n')
 
 const palavra = palavra => {
    palavra = 'Olá, ' + palavra + '!'
    return palavra
 }

 const individuo = palavra('Rebeca')
 console.log(individuo)

 linha()
/*
2) Escreva uma função que receba a idade 
de uma pessoa em anos e retorne a mesma idade em dias.
 */

 console.log('RESPOSTA 02: \n')
 
const idade = 9
const idadeEmDias = idadePessoa =>  idadePessoa = idadePessoa * 365
console.log(`${idade} anos de idade é igual a ${idadeEmDias(idade)} dias.`)

linha()
/*
3) Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas 
por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função 
deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês
 */

console.log('RESPOSTA 03: \n')

const horasTrabalhadas = 176
const valorPorHoraTrabalhada = 22.5

salarioMesFuncionario = (horasTrab, valorHorasTrab) => {
    const salarioMesFunc = horasTrab * valorHorasTrab
    console.log(`Salário igual a R$ ${salarioMesFunc.toFixed(2).replace('.', ',')}`) 
}

salarioMesFuncionario(horasTrabalhadas, valorPorHoraTrabalhada)

linha()
/*
4) Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. 
Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
 */

console.log('RESPOSTA 04: \n')

const numEscolhido = 8

const mesesObj = {
    meses: ['Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
    'Novembro', 'Dezembro']
}

mesCorrespondente = numEscolhido => {
    const indiceCorrespondente = numEscolhido--
    
    if(mesesObj.meses[numEscolhido] == undefined) {
        console.log('ERRO 001.undefined - informação inválida!') 
    } else {
        console.log(`O ${indiceCorrespondente}º mês do ano é ${mesesObj.meses[numEscolhido]}`)
    }
    
}

mesCorrespondente(numEscolhido)

linha()
/*
5) Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo
 */

console.log('RESPOSTA 05: \n')

const maiorOuIgual = (num1, num2) => {
    if(num1 >= num2) {
        console.log(`${num1} é maior ou igual a ${num2}: `, true)
    } else {
        console.log(`${num1} é maior ou igual a ${num2}: `, false)
    }
}

maiorOuIgual(1,2)
maiorOuIgual(2,2)
maiorOuIgual(10,2)

linha()
/*
6) Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, 
o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. 
Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, 
o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou 
número esperados, mas o parâmetro é do tipo ...".
 */

console.log('RESPOSTA 06: \n')

inverterValores = num => {
    //console.log(typeof(num))
    if(typeof(num) == "boolean") {
        switch(num) {
            case true:
                num = false
                console.log(num)
                break
            case false:
                num = true
                console.log(num)
                break
        }
       
    } else if (typeof(num) == "number") {
        num = num * -1
        console.log(num)
    } else {
        console.log(`Booleano ou Número esperado, maos o parâmetro é do tipo String`)
    }
   
}

inverterValores(false)
inverterValores(true)
inverterValores(3)
inverterValores(8/4)
inverterValores(-3)
inverterValores(-3*5)
inverterValores('dois')

linha()
/*
7) Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) 
e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
 */

console.log('RESPOSTA 07: \n')

doisNumerosInteirosPositivos = (a, b) => {
    let resultado = 0
    
    for (let i = b; i > 0; i--) {
        resultado += a
    }

    a >= 0 && b >= 0 ? console.log(resultado) : console.log("Não permitido número(s) inteiro(s) negativo(s)")
    
}

doisNumerosInteirosPositivos(60,3)
doisNumerosInteirosPositivos(3,3)
doisNumerosInteirosPositivos(0,2)
doisNumerosInteirosPositivos(2,0)
doisNumerosInteirosPositivos(-2,3)

linha()
/*
8) Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, 
enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

console.log('RESPOSTA 08: \n')

repeticaoDeNumEmArray = (num, numRepeticao) => {
    
    const arrayRepeticao = []

    for(let i = 0; i < numRepeticao; i++ ){
        arrayRepeticao.push(num)
        console.log(arrayRepeticao)
    }

}

repeticaoDeNumEmArray('dois', 4)
repeticaoDeNumEmArray(33, 3)

linha()
/*
9) Crie uma função que receba uma array e retorne o primeiro e o último elemento desse 
array como um novo
 */

console.log('RESPOSTA 09: \n')

const meuArray = ['dois', 3, 5.6, -8, true]

gerarNovoArray = array => {
    const tamanhoArray = array.length
    const novoArray = []

    for(let i = 0; i < tamanhoArray; i++) {
        if(i == 0) {
            novoArray[0] = array[i]
        } else if (i == tamanhoArray - 1) {
            novoArray[1] = array[i]
        }
    }
    
    console.log(novoArray)
    
}

gerarNovoArray(meuArray)

linha()
/*
10) Crie uma função que receba um array de elementos e retorne um array somente 
com os números presentes no array recebido como parâmetro.
 */

console.log('RESPOSTA 10: \n')

const arrayDeElementos = ['Teste', 3, true, 5, 'tres', 99.5, -66, false]

arraySomenteNumeros = array => {
    const novoArray = []
    //funcao para mapear e pegar os numeros do array
    array.map(function(array){
         if(typeof(array) == "number") novoArray.push(array) 
    })

    console.log(novoArray)

}

arraySomenteNumeros(arrayDeElementos)

linha()
/*
11) Você está trabalhando numa aplicação pessoal de controle de despesas. 
Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, 
informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo 
no momento é a de somar o total das despesas.
 */

console.log('RESPOSTA 11: \n')
const despesas = [{
    nome: 'Ana',
    categoria: 'Informação',
    preco: 89.99
}, {
    nome: 'Carla',
    categoria: 'Entretenimento',
    preco: 112.75
}, {
    nome: 'Beatriz',
    categoria: 'Veículo',
    preco: 151.85
}]

console.log(despesas)

const despesaTotal =  despesas.map(d => d.preco).reduce(function(precoAnterior, precoAtual){
        return precoAnterior + precoAtual
    })
    //console.log(totalPreco)

console.log(`Total despesas: R$ ${despesaTotal.toFixed(2).replace('.', ',')}`)

linha()
/*
12) calcula a media de um array de tamanho indeterminado
 */

console.log('RESPOSTA 12: \n')

//const arrayEx = [0, 3, 6]  
//console.log(arrayEx.length)

resultadoArray = (arr) => {
    let soma = 0
    
    //tamanho do array
    const tamArray = arr.length
    //console.log(tamArray)

    //somar os elementos do array
    const somaArray = arr.forEach(function(value) {
        //console.log(value)
        soma += value
    })

    //média
    const mediaArray = soma / tamArray
    return mediaArray

}


const mediaResp = resultadoArray([3, 8, 4, 5, 6.9, 8.9])
console.log(mediaResp.toFixed(2))

linha()
/*
14) Desenvolva uma função que receba como parâmetro um número de 1 a 10. 
Internamente, na função, será gerado um número aleatório de 1 a 10. 
A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado 
internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! 
O número sorteado foi o X". Se não for igual, retorne "Que pena!
 O número sorteado foi o X". X é o número que foi sorteado
 */

console.log('RESPOSTA 14: \n')
const playerNumber = numb => {
    let aleatoryNumb = Math.random()
    aleatoryNumb *= 10
    aleatoryNumb = aleatoryNumb.toFixed(0)
    //console.log(aleatoryNumb.toFixed(0))

    if(aleatoryNumb == numb) {
        console.log(`Parabéns! O número sorteado foi o ${aleatoryNumb}!`)
    } else {
        console.log(`Que pena! O número sorteado foi o ${aleatoryNumb}`)
    }

}


playerNumber(3)

linha()
/*
15) Criar uma função que receba 
uma string como parâmetro e conte quantas palavras tem nela.
 */

console.log('RESPOSTA 15: \n')

const palavraA = 'The game is not over and I wannna ROck!!!'


const contadorDePalavras = p => {
    //transformando em array
    const arrayStr = p.split(' ') // usando ' ' como separator
    console.log(arrayStr)
    const totalStr = arrayStr.length
    console.log(`Total de palavras: ${totalStr}`) 
}


contadorDePalavras(palavraA)
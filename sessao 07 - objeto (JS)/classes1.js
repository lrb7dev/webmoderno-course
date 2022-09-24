class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    //recebe um ou mais lancamentos que queira passar    
    addLancamentos(...lancamentos) {
        //percorrendo cada elemento do array e dando push no array que pertence ao objeto
        lancamentos.forEach(lanc => this.lancamentos.push(lanc))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(lanc => {
            valorConsolidado += lanc.valor
        })
        return valorConsolidado
    }

}//end CicloFinanceiro

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220.50)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

//resultado da soma
console.log(contas.sumario())
console.log(salario)
console.log(contaDeLuz)
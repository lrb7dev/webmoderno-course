import React, {Component} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

//estado inicial
const initialState = {
    displayValue: '0', //display inicial
    clearValue: false,
    operation: null,
    values: [0, 0], //trabalhando com dois valores
    current: 0 //qual indice estara mexendo
}

export default class Calculator extends Component {

    //criando um clone do objeto
    state = {...initialState}

    //resolver a questao do 'this'
    constructor(props) {
        
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    //funcao zerar o display
    clearMemory() {
        //console.log('limpar')
        this.setState({...initialState})
        //console.log(this.state.displayValue) //testendo...
    }

    //setar operacao
    setOperation(operation) {
        //console.log(operation)
        //se a expressao for verdadeira...
        if(this.state.current === 0) {
            //setando o estado
            this.setState({ operation, current: 1, clearDisplay: true })
            console.log(operation)
        } else {
            //reservar em equals caso operation === '='
            const equals = operation === '='
            //pegar a operacao ja estabelecida
            const currentOperation = this.state.operation
            //gerando um clone de values
            const values = [...this.state.values]
            //passado no curso o uso de eval()
            //sempre que uma operacao for executada,
            //o resultado sera armazenado no values[0],
            //para manter e seguir uma nova operacao, caso haja...
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                //problema com cliques simultaneos em operadores
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory()
                return
                }
            } catch(e) {
                values[0] = this.state.values[0] 
            }
            values[1] = 0

            //setando estado
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    //adicionar digito
    addDigit(n) {
        //console.log(n)
        //condicao para nao ocorrer tentativa de mais de um ponto nos numeros
        if(n === '.' && this.state.displayValue.includes('.')) {
            return 
        }

        //condicao para limpar o display -- quando inicial 0 
        //e quando clearDisplay(true)
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        //valor corrente
        const currentValue = clearDisplay ? '' : this.state.displayValue
        //novo valor display
        const displayValue = currentValue + n
        //mudar o estado
        this.setState({ displayValue, clearDisplay: false })

        //condicao para armazenar os numeros no array setado inicialmente [values]
        //para usar nas operacoes
        if(n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values] //clonar o array
            values[i] = newValue
            this.setState({values})
            console.log(values) //testando
        }

    }

    render(){

        //const addDigit = n => this.addDigit(n)
        //const setOperation = op => this.setOperation(op)

        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}
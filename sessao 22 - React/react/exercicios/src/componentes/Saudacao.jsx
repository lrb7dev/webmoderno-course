import React, {Component} from 'react'

export default class Saudacao extends Component {
    //para altera o this.props precisa usar o state
    state = {
        tipo: '',
        nome: ''
    } 
    
    constructor(props) {
        super(props)

        //uma solucao com super
        this.setTipo = this.setTipo.bind(this)
        //this.setNome = this.setNome.bind(this)
    }

    //funcao para setar o tipo
    setTipo(e) {
        //console.log(e.target.value)
        //alterar o estado
        this.setState({ tipo: e.target.value})
        //this.setState({ nome: e.target.value})
    }
    //funcao para setar o nome
    setNome(e) {
        //console.log(e.target.value)
        //alterar o estado
        this.setState({ nome: e.target.value})
    }

    render() {
        //referenciando de dentro de props os atributos
        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                <input type="text" placeholder="Nome" 
                value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Sobrenome" 
                value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}
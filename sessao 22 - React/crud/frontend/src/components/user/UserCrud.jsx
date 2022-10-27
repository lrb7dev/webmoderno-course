import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'


const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Inlcuir, Listar, Alterar e Excluir.'
}

//url do backend
const baseUrl = 'http://localhost:3001/users'
//estado inicial
const initialState = {
    user: {name: '', email: ''},
    list: []
}



//para metodo de ciclo de vida 
//e o estado
export default class UserCrud extends Component {

    //inicializando o estado
    state = {...initialState}

    //limpar o formulario
    clear() {
        this.setState({ user: initialState.user })
    }

    //salvar o formulario
    save() {
        //referenciando user na const criada
        const user = this.state.user
        //sabendo se ha id, e a condicao...
        //condicao para alterar ou incluir
        const method = user.id ? 'put' : 'post'
        //condicao para id setado ou nao
        const url = user.id ? `${baseUrl}/${user.id}` : `${baseUrl}`
        //apos definicoes chama-se o axios
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                //resetando para initialState e atualizando a lista
                this.setState({user: initialState, list})
            })
    }

    //lista atualizada
    getUpdatedList(user) {
        //removendo o usuario da lista e adicionando na primeira posicao
        const list = this.state.list.filter(u => u.id !== user.id)
        //colocando na primeira posicao do array
        list.unshift(user)
        return list
    }

    //atualizar campos
    updateField(event) {
        //clonando o user
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    //renderizar o formulario
    renderForm() {
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Nome</label>
                            <input type="text" className="form-control"
                            name="name"
                            value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">E-mail</label>
                            <input type="text" className="form-control"
                            name="email"
                            value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o e-mail" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                        onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary mx-1"
                        onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return(
            <Main {...headerProps}>
                {/*chamando o formulario*/}
                {this.renderForm()}
            </Main>
        )
    }

}
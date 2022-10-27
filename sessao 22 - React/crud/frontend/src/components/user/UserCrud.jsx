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

    //chamada no backend para obter a lista do que esta cadastrado
    //UNSAFE_componentWillMount: desuso, porem utilizado no curso por conta da data
    //componentDidMount
    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

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
    getUpdatedList(user, add = true) {
        //removendo o usuario da lista e adicionando na primeira posicao
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        //list.unshift(user)
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

    //carregar o estado atual
    load(user) {
        this.setState({user})
    }

    //exlcuir registro da base
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            //atualizar a lista
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })
    }

    //renderizar a tabela
    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/*chamando a funcao que renderiza as linhas*/}
                    {this.renderRows()}
                </tbody>
            </table>
        )

    }

    //renderizar linhas da tabela
    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                        onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        //testando
        //console.log(this.state.list)
        return(
            <Main {...headerProps}>
                {/*chamando o formulario*/}
                {this.renderForm()}
                {/*chamando a tabela*/}
                {this.renderTable()}
            </Main>
        )
    }

}
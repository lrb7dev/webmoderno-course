import React, {Component} from 'react'
import Main from '../template/Main'


const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Inlcuir, Listar, Alterar e Excluir.'
}

//para metodo de ciclo de vida 
//e o estado
export default class UserCrud extends Component {
    render() {
        return(
            <Main {...headerProps}>
                <h1>Testando</h1>
            </Main>
        )
    }

}
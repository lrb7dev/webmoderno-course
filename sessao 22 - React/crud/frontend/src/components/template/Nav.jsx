import './Nav.css'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="menu-area">
        {/*TODO: REFATORAR EM CASA*/}
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>
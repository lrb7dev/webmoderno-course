import './Main.css'
import React from 'react'
import Header from './Header'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <React.Fragment>
        <Header {...props}></Header>
        <main className="content">
            Conteudo
        </main>
    </React.Fragment>

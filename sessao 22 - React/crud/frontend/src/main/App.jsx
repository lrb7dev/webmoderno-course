import './App.css'
import React from 'react'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
    </div>
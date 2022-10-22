//importante dependencias
import React from 'react'
import ReactDOM  from 'react-dom'
//import App from 'App'

// //importando de compomentes
// import Primeiro from './componentes/Primeiro'
// //renderizando na pagina
// ReactDOM.render(<Primeiro/>, document.getElementById('root'))


// //<h1>React - exercícios</h1> => trecho em JSX -- o react faz sua leitura
// const elemento = <h1>React - exercícios</h1> 
// //renderizar o primeiro elemento da página
// ReactDOM.render(elemento, document.getElementById('root'))

//importando componente
import BomDia from './componentes/BomDia'
//passando parametros
//ReactDOM.render(<BomDia nome="Pedra Dourada"/>, document.getElementById('root'))


const container = document.getElementById('root')
//create a root
const root = ReactDOM.createRoot(container)
//initial render
root.render(<BomDia/>)
//during an update, there is no need to pass container again!

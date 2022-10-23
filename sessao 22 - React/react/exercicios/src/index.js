//importante dependencias
import React from 'react'
import ReactDOM  from 'react-dom'
//import BomDia from './componentes/BomDia'
//import App from 'App'

// //importando de compomentes
// import Primeiro from './componentes/Primeiro'
// //renderizando na pagina
// ReactDOM.render(<Primeiro/>, document.getElementById('root'))


// //<h1>React - exercícios</h1> => trecho em JSX -- o react faz sua leitura
// const elemento = <h1>React - exercícios</h1> 
// //renderizar o primeiro elemento da página
// ReactDOM.render(elemento, document.getElementById('root'))

// //importando componente
// import BomDia from './componentes/BomDia'
// //passando parametros
// //ReactDOM.render(<BomDia nome="Pedra Dourada"/>, document.getElementById('root'))


// const container = document.getElementById('root')
// //create a root
// const root = ReactDOM.createRoot(container)
// //initial render
// root.render(<BomDia/>)
// //during an update, there is no need to pass container again!


//------------------------------------------------
//MULTIPLOS

// import {BoaTarde, BoaNoite} from './componentes/Multiplos'
// const container = document.getElementById('root')
// //create a root
// const root = ReactDOM.createRoot(container)
// //initial render
// //root.render(<BoaTarde/>)
// //root.render(<BoaNoite></BoaNoite>) //BoaNoite -- sobreescre ------
// //root.render(<BoaTarde/>, <BoaNoite/>) //BoaTarde -- sobreescre
// root.render(
//     <div>
//         <BoaTarde nome="Ana"></BoaTarde>
//         <BoaNoite nome="Carla"></BoaNoite>
//     </div>
// )

//================= COMPONENTES DE CLASSES ===============
// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Melee" nome="Knight"/>
//     </div>
// , document.getElementById('root'))

//============= COMPONENTES PAI & FILHO =======================
import Pai from './componentes/Pai'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva"/>
    </div>
)

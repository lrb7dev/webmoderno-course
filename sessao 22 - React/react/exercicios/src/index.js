//importante dependencias
import React from 'react'
import ReactDOM  from 'react-dom'

//<h1>React - exercícios</h1> => trecho em JSX -- o react faz sua leitura
const elemento = <h1>React - exercícios</h1> 
//renderizar o primeiro elemento da página
ReactDOM.render(elemento, document.getElementById('root'))
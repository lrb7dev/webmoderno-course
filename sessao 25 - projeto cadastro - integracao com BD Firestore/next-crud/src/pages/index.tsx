/**
 * pode ocorrer o erro:
 *  -- cannot find autoprefixer -- 
 * caso ocorra, faça o seguinte:
 * npm uninstall tailwindcss postcss autoprefixer
 * npm install tailwindcss@latest postcss@latest autoprefixer@latest 
 * */ 

import React from 'react'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'


export default function Home() {

  const clientes = [
    new Cliente('Ana', 30, '1'),
    new Cliente('Beatriz', 18, '2'),
    new Cliente('Laura', 28, '3'),
    new Cliente('Jennifer', 33, '4')
  ]

  //editando cliente
  function clienteSelecionado(cliente: Cliente) {
    //testando...
    console.log(`Editando ${cliente.nome}`)
  }

  //excluindo cliente
  function clienteExcluido(cliente: Cliente) {
    //testando...
    console.log(`Excluindo ${cliente.nome}`)
  }

  return (
    <div className='{`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}'>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado} 
        clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>  
  )
}

//utilizado no inicio para exemplificar
/*<div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
    `}>
      <span className='text-5xl'>This is a simple test</span>
    </div>
  */
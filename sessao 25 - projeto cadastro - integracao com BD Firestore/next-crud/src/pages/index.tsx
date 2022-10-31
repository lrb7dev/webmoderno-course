/**
 * pode ocorrer o erro:
 *  -- cannot find autoprefixer -- 
 * caso ocorra, faça o seguinte:
 * npm uninstall tailwindcss postcss autoprefixer
 * npm install tailwindcss@latest postcss@latest autoprefixer@latest 
 * */ 

import React from 'react'
import Layout from '../components/Layout'



export default function Home() {
  return (
    <div className='{`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}'>
      <Layout titulo="Cadastro Simples">
        <span>Conteúdo</span>
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
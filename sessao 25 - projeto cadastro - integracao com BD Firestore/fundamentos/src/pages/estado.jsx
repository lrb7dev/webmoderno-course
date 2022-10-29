import Layout from '../components/Layout'
//para mudar o estado
import { useState } from 'react'


export default function Estado() {
    
    //let num = 3

    //estado
    //const state = useState(0)
    //console.log(state)
    /*
    * No useState, a primeira posicao é o propŕio valor
    * e a segunda posição é uma função
    */
    // let numero = state[0]
    // let alterarNumero = state[1]


    //usando destructuring
    const [numb, setNumb] = useState(0) //hooks [saber mais sobre...]
    

    function incrementar() {
        //numero += 1
        //console.log(num)
        setNumb(numb + 1)
    }

    return (
        <Layout titulo="Componente com estado">
            <div>{numb}</div>
            <hr></hr>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}
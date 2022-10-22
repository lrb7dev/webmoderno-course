//import React from 'react' //usando assim tera que usar nos Fragments o React.Fragment

//importando o React.Fragment junto
//import React, { Fragment } from "react"

import React from "react"

//dentro de array tambem funcionara mais de um componente
//porem terá que trabalhar com chaves para cada elemento
export default props => [
    <h1 key="h1">Bom dia, {props.nome}!</h1>,
    <h2 key="h2">Até mais!</h2>,
    <h3 key="h3">xD</h3>
]

// export default props =>
//     //<React.Fragment> é uma tag que envolve os elementos
//     //internos, porem não renderiza no html
//     <Fragment>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Até mais!</h2>
//         <h3>...</h3>
//     </Fragment> 

// import React from "react"
// export default props => 
//     <div>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Até mais!</h2>
//         <h3>...</h3>
//     </div> 
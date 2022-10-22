import React from "react"

const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>
const BoaNoite = props => <h2>Boa Noite {props.nome}!</h2>

//outro modo
export default BoaTarde

//outro maneira
//export default {BoaTarde, BoaNoite}


//outra forma
export {BoaNoite, BoaTarde}
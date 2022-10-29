import Navegador from "../components/Navegador"
import styles from "../styles/Navegador.module.css"

export default function Inicio() {
    
    //TODO:par de parenteses para colocar trechos maiores
    //esses classnames sao so para estilizar um pouco para o estudo, apenas testes
    return (
        //usando style dentro da div
        <div style = { {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            height: '100vh',
            flexWrap: 'wrap',
            fontSize: '1.2rem',
            textAlign: 'center',
            fontWeight: '500',
            fontFamily: 'monospace',
            fontStyle: 'italic'
            
        } } >
            <Navegador texto="Estilo" destino="/estilo" cor="coral"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#12dd08" />
            <Navegador texto="JSx" destino="/jsx" cor="violet" />
            <Navegador texto="Navegação #01" destino="/navegacao" cor="crimson"/>
        </div>
        
    ) 



    

// <div className="padding-05 txt-center">
//     <h1 className="coral-color">Fundamentos de NextJS & React</h1>
//     <h3>Estudando o framework</h3>
// </div>
// 
    
}
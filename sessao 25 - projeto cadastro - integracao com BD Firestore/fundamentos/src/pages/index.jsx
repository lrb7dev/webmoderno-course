import Navegador from "../components/Navegador"


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
            <Navegador texto="Nav. #01" destino="/navegacao" cor="crimson"/>
            <Navegador texto="Nav. #02 Dinâmica" destino="/cliente/mg/123" cor="#191970"/>
            <Navegador texto="Comp. com Estado" destino="/estado" cor="#cad355"/>
            <Navegador texto="Pre-render STATIC" destino="/estatico" cor="#13aabb"/>
        </div>
        
    ) 



    

// <div className="padding-05 txt-center">
//     <h1 className="coral-color">Fundamentos de NextJS & React</h1>
//     <h3>Estudando o framework</h3>
// </div>
// 
    
}
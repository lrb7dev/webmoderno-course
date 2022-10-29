import Cabecalho from "../components/Cabecalho";
import Layout from '../components/Layout'

export default function Exemplo() {
    return (
        //para mais de um componente
        <Layout titulo="Usando Componentes">
        <Cabecalho></Cabecalho>
        </Layout>
        
    )
}
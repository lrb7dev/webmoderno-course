import Layout from '../components/Layout'

//para geracao de conteudo estatico...

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>    
    )


}
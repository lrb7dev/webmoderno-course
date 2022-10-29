import styles from '../styles/Estilo.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estilo() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
                <h2 className={styles.color001}>Color001</h2>
            </div>
        </Layout>
        
    )


}
import Layout from '../../../components/Layout'
//ajuda a ter acesso ao valor
import { useRouter } from 'next/router'

import router from 'next/router'
import { useEffect } from 'react'


export default function ClientProCodigo() {
    //para ter acesso 
    const router = useRouter()
    //console.log(router.query)
    
    
    useEffect(() => {
        console.log(router.query)
    }, [])
    
    return (
        <Layout titulo="Navegação Dinâmica">
            {/*usando o useRouter para acessar*/}
            <div>Código =  {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>

    )
}
import Titulo from "./Titulo"

//criar interface : recurso typescript
interface LayoutProps {
    titulo: string //receber uma propriedade chamada titulo que é uma string
    children: any //receber uma propriedade chamada children que pode ser qualquer coisa
}

export default function Layout(props: LayoutProps) {
    return(
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800 
            rounded-md shadow-2xl
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>



    )


}
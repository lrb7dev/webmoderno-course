export default function Jsx() {
    //contexto diferente do que dentro de return
    const a = 1
    const b = 2
    const c = a + b

    //outro exemplo
    function msg(plus) {
        console.log(plus + c)
    }

    //objeto para ser usado dentro do return
    const obj = {nome: 'Carlos', idade:30, email:"Carlos@30.com"}

    //consegue tratar o jsx de forma natural
    const inicio = <h1><span className="coral-color">JSX</span> é um Conceito Central</h1>
    
    function subtitulo() { 
        return <h2>Retornando a função do subtítulo</h2> 
    }
    
    const fraseFinal = <h4 className="coral-color">The End!!!</h4>

    return (
        <div className="padding-05 txt-center">
            {inicio}
            {subtitulo()}
            <h3>O resultado da const c * b = {c * b}</h3>
            {/*para mostrar no console o chamado da funcao msg(plus)*/}
            {msg("a mensagem + ")}
            {/*outro exemplo*/}
            <span>Gerando um número aleatório: {(Math.random().toFixed(2))*100}</span><br/>
            <div>{`muito legal const c = ${c}`.toUpperCase()}</div>
            <p>
                {`${obj.nome} tem ${obj.idade} anos e seu email é: ${obj.email}`}<br/>
                {JSON.stringify(obj)}
            </p>
            {/*usando a const criada acima, antes do return*/}
            <div>
                {fraseFinal}
            </div>
        </div>
    )
}
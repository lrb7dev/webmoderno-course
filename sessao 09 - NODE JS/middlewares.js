//padrao MIDDLEWARE / CHAIN OF RESPONSABILITY
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid 1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid 2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

//funcao exec que recebera o 'contexto' e um conjunto de 'funcoes middlewares'
const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && // se middwares e indice forem menores e o tamanho do middlewares e middlewares[indice]
        middlewares[indice](contexto, () => execPasso(indice + 1)) //reutilizacao da funcao dentro da propria funcao
    }   
    //para iniciar o execPasso
    execPasso(0)    
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
const ctx2 = {}
exec(ctx2, passo1, passo2)
console.log(ctx2)
const ctx3 = {}
exec(ctx3, passo2, passo3)
console.log(ctx3)
const ctx4 = {}
exec(ctx4,passo1,passo3)
console.log(ctx4)
const ctx5 = {}
exec(ctx5, passo1)
console.log(ctx5)
const ctx6 = {}
//nao chama o passo1 por conta do passo3 nao chamar o next()
exec(ctx6,passo3,passo1)
console.log(ctx6)

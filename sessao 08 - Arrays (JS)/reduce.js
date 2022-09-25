/*
O método reduce() executa uma função reducer (fornecida por você) 
para cada elemento do array, resultando num único valor de retorno.
*/
const champions = [
    { nome: "Lux", lane: "suporte", disponivel: true, dificuldade: 3},
    { nome: "Malzahar", lane: "mid", disponivel: true, dificuldade: 3},
    { nome: "Akali", lane: "mid", disponivel: false, dificuldade: 4},
    { nome: "Zed", lane: "mid", disponivel: true, dificuldade: 4},
    { nome: "Katarina", lane: "mid", disponivel: true, dificuldade: 5},
    { nome: "Sejuani", lane: "jungle", disponivel: false, dificuldade: 3},
    { nome: "Garen", lane: "top", disponivel: true, dificuldade: 3},
    { nome: "Tryndamere", lane: "top", disponivel: true, dificuldade: 3},
    { nome: "Jhinx", lane: "adc", disponivel: true, dificuldade: 4},
    { nome: "Aphelios", lane: "adc", disponivel: false, dificuldade: 5}
]

console.log("Array de .dificuldade: ", champions.map(d => d.dificuldade))
const resultado = champions.map(d => d.dificuldade).reduce(function(acumulador, atual){
    console.log("Acumulador: ", acumulador, "Atual", atual)
    return acumulador + atual
})

console.log("Valor de resultado: ", resultado)
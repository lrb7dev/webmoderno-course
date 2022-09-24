//forma de filtrar um array para criar outros
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

const novoArray = champions.filter(function(champs){
    //return champs.disponivel == false
    //return champs.nome == "Akali"
    return champs.dificuldade >= 3 && champs.dificuldade <= 4
})

console.log(`Tamanho do novo array: ${novoArray.length}\n`, novoArray)
 
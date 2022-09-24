const carrinho = [
    '{ "nome": "Borracha", "preco": 3.5 }',
    '{ "nome": "Caneta", "preco": 7.8 }',
    '{ "nome": "Caderno", "preco": 11.00 }',
    '{ "nome": "Kit de Lapis", "preco": 12.50 }'
]

//Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)
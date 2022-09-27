//passar 'id' do produto de forma sequencial
const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

//objeto produtos
const produtos = {}

//salvar produto
function salvarProduto(produto) {
    //se chegar aqui em estar setado a id...
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

//pegar o produto
function getProduto(id) {
    //retorna produto pela id ou vazio se nao encontrou
    return produtos[id] || {}
}

//pegar todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

//visiveis para fora do arquivo bancoDeDados.js
module.exports = {salvarProduto, getProduto, getProdutos}
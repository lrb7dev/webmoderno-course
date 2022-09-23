function area(largura, altura) {
    const area = altura * largura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
}

console.log('retorna o valor da area: ' + area(2,2))
console.log('passando apenas um parametro: ' + area(3))
console.log('nao passando parametros: ' + area())
console.log('passando mais parametros do que a quant. criada: ' + area(2, 5, 10, 11, 13))
console.log('ultrapassando o limite do valor imposto: ' + area(10, 5))
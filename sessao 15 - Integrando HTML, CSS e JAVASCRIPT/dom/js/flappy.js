//funcao para criar elemento e sua classe
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

/*
funcao CONSTRUCT para criar as barreiras
e se ela é reversa(embaixo) ou nao
*/
function Barreira(reversa = false) {
    //criando o elemento - barreira
    this.elemento = novoElemento('div', 'barreira')

    //criando a borda e o corpo
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    //condicao montar os obstaculo em seu sentido proposto
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    //alterar a altura da barreira
    this.setAltura = altura => corpo.style.height = `${altura}px`

}

/* exemplificacao
const b = new Barreira(true) //sera reversa (embaixo)
b.setAltura(300) //setando a altura de 'b'
//adicionar a barreira dentro da area do jogo onde está o atributo personalizado [wm-flappy]
document.querySelector('[wm-flappy]').appendChild(b.elemento)
*/

//IMPORTANTE: sempre que se cria algo dentro de uma funcao com 'this.' ela se torna acessivel fora dessa funcao
//funcao CONSTRUCT para criar o par de barreiras
function ParDeBarreiras(altura, abertura, x) {
    //criando a <div class.par-de-barreiras>
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true) //barreira de cima
    this.inferior = new Barreira(false) //barreira de baixo

    //adicionando dentro da <div.par-de-barreiras>
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    //funcao para gerar uma abertura de tamanho aleatorio entre os canos
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    //saber em que posicao o .par-de-barreiras está
    //split para separar em um array o valor numerico das letras 'px'
    //passando para Integer o que foi gerado no array feito por split do valor contido na string
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])

    //para mudar posicao da barreira em varios momento
    this.setX = posicaoX => this.elemento.style.left = `${x}px`
    //pegar a largura
    this.getLargura = () => this.elemento.clientWidth

    //chamando a funcao para sortear a abertura
    this.sortearAbertura()
    //passando a posicao de 'posicaoX'
    this.setX(x)

}

//testanto...
const b = new ParDeBarreiras(700, 200, 400)
document.querySelector('[wm-flappy]').appendChild(b.elemento)
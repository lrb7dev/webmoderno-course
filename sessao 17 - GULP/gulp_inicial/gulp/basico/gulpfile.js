//serie de tarefas que irao automatizar os processos dentro da aplicacao
//podem ser serial: uma apos a outra
//podem ser paralelas: uma no mesmo tempo da outra
const gulp = require('gulp')
const { series, parallel } = require('gulp') //importando o series e parallel
//const { series } = require('gulp') //uma possibilidade
//const series = gulp.series //outra forma

const antes1 = callback => {
    console.log('Tarefa Antes 1')
    return callback()
}

const antes2 = callback => {
    console.log('Tarefa Antes 2')
    return callback()
}

function copiar(callback) {
    //console.log('Tarefa de copiar')
    //selecionar os arquivos
    //selecionando todos os arquivos dentro da pasta que tenham a extensao .txt
    gulp.src('pastaA/**/*.txt')
    //selecionando um conjunto de arquivos por array
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //fazer um array
    //aplicar transformacoes nos arquivos
        .pipe(gulp.dest('pastaB')) //como nao existe a pasta ele ira criar esse dest -> destino
        // .pipe(imagemPelaMetade())
        // .pipe(transformacao1())
        // .pipe(transformacao2())
        // .pipe(transformacao3())

    return callback()
}

const fim = callback => {
    console.log('Tarefa - FIM')
    return callback()
}

//exportar --> colocar .default por definicao para o gulpe rodar
module.exports.default = series(
    parallel(antes1, antes2), //executando em paralelo
    copiar,
    fim
)
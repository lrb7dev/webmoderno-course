//importando
const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

//funcoes
function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080, //porta que ira usar
            open: true, //nova aba?
            livereload: true //atualizando em tempo real ~
        }))
}

//para fazer as mudanças nos arquivos quando houver
function monitorarArquivos(cb) {
    //sempre que alterar um arquivo .html, sera chamado a funcao para salvar as alteracoes via gulp
    watch('src/**/*.html', () => gulp.series('appHTML')() )
    //sempre que alterar um arquivo .css, sera chamado a funcao para salvar as alteracoes via gulp
    watch('src/**/*.css', () => gulp.series('appCSS')() )
    //sempre que alterar um arquivo .js, sera chamado a funcao para salvar as alteracoes via gulp
    watch('src/**/*.js', () => gulp.series('appJS')() )
    //sempre que alterar um arquivo dentro da pasta /imgs/, sera chamado a funcao para salvar as alteracoes via gulp
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')() )
    return cb()
}



//exportando
module.exports = {
    monitorarArquivos,
    servidor
}
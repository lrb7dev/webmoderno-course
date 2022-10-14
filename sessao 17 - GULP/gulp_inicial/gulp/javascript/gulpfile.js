//juntar os arquivos calculadora.js e testeCalculadora -- para haver operacao das funcoes
//usar o babel para deixar o codigo o mais acessivel possivel por todos os browsers
//minificar o arquivo

//importanndo...
const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callback) {
    //pegar os arquivos de extensao .js dentro da pasta src
    //nota: '**' -> qualquer subpasta dentro daquela pasta
    return gulp.src('src/**/*.js')
        //chamar o babel e passar objetos de configuracao
        .pipe(babel({
            comments: false, //nao passar comentarios
            presets: ["env"] //pegar o js mais novo possivel
        }))
        .pipe(uglify()) //minificar todo os codigo
        .on('error', err => console.log(err)) // caso aconteça algum erro
        .pipe(concat('cod.min.js')) //concatenar os arquivos -- cod.min.js -> sera o nome do arquivo minificado gerado
        .pipe(gulp.dest('build')) //qual o destino...


    //return callback()
}

//chamando...
//module.exports... ou
exports.default = series(transformacaoJS) //sera executado as tarefas em serie
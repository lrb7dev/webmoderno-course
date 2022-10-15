const webpack = require('webpack')

module.exports = {
    mode: 'development', //modo desenvolvedor
    entry: './src/principal.js'
}

//em caso de erro do 'npm start'
//no terminal use: $env:NODE_OPTIONS="--openssl-legacy-provider"
//e tente novamente: npm start
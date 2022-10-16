const modoDev = process.env.NODE_ENV !== 'production'
const path = require('path')

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    //mode: 'development', //modo desenvolvedor
    entry: './src/principal.js', //ponto de entrada
    output: {
        filename: 'principal.js', //nome do arquivo
        path: __dirname + '/public' //caminho
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //adiciona CSS a DOM injetando a tag <style>
                'css-loader', //interpreta @import, url()...
                'sass-loader',
            ]
        }, 
        // {
        //     test: /\.(png|svg|jpg|gif)$/,
        //     use: ['file-loader'],
        // }
    ] 

    },
    // optmization: {
    //     minimize: true,
    //     minimizer: [
            
    //         new CssMinimizerWebpackPlugin(),
    //     ]
    // },
}
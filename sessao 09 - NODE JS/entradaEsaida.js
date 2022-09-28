const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    //console.log('Fala ANÔNIMO!\n')
    process.exit()
}else{
    //escreve na tela
    process.stdout.write('Qual seu nome? ')
    //pede para passar algum dado de entrada...
    process.stdin.on('data', data => {
        //passa esse dado para string e subistitui o ENTER por vazio
        const nome = data.toString().replace('\n', '')

        //escreve na tela
        process.stdout.write(`E ai ${nome}!!\n`)
        //fim do processo
        process.exit()
    })
}
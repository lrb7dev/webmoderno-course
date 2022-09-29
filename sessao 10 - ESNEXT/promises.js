//quando quer ter um processamento ASSINCRONO
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //situacao de sucesso
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
.then(frase => frase.concat('!!!'))
.then(outraFrase => console.log(outraFrase))
//.catch(e => console.log(e)) //tratar casos de erro -reject-
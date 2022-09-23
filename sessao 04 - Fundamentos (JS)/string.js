const escola = "Cod3r"

console.log(escola.charAt(2)) //pegar o valor no indice dois da const
console.log(escola.charCodeAt(1)) // codigo na tabela ASCII <--const
console.log(escola.indexOf('3')) //retorna o indice 
console.log(escola.substring(2)) // vai a partir do indice 2
console.log(escola.substring(1,4)) // do indicie 1 ao indice 3

console.log("Escola ".concat(escola).concat("!"))

//importante
console.log(escola.replace(3, 'e')) //substitui 
console.log(escola.replace(/\d/, 'e')) //substitui todos os digitos
console.log(escola.replace(/\w/g, "x7")) //substitui todos os caracteres

//transforma string com virgulas em array
console.log('Batman,Flash,Wonderwoman'.split(',')) //separa por indice para array quando chega na ','
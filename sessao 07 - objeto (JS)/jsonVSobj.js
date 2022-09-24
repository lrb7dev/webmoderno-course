//JSON - javascript object notation - formato de dados para interoperabilidade
//formato textual
const obj = {a:1, b:2, c:3, soma(){ return a + b + c} }
//convertendo para JSON
console.log(JSON.stringify(obj))

//pegar um JSON e transformar em OBJETO
//console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) //formato invalido
//console.log(JSON.parse("{'a': 1, 'b'':2, 'c':3 }")) //so aceita aspas duplas no nome --- formato invalido -- 
const obj2 = JSON.parse('{ "a": 1, "b":2, "c":3 }')
console.log(obj2)
console.log(typeof obj2)

//tipos que o JSON suporta passar
console.log("................\nTipos suportados:")
console.log(JSON.parse('{"numbers": 1}' ))
console.log(JSON.parse('{"strings": "Sou eu!" }'))
console.log(JSON.parse('{"booleans": true }'))
console.log(JSON.parse('{"objects": {} }'))
console.log(JSON.parse('{"arrays": [] }'))
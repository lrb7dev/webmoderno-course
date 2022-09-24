function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
/*
quando voce cria um objeto a partir de uma funcao
construtora usando 'new' o prototipo desse objeto
aponta para funcao que voce criou '.prototype'
*/
console.log(MeuObjeto.prototype === obj1.__proto__)

/*segnifica que a partir de agora o MeuObjeto tem 
essa variavel que pode ser acessado pelos seus herdeiros
*/
MeuObjeto.prototype.nome = 'Anônimo'
//exemplo
console.log(obj2.nome)
//outro exemplo
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()
obj1.nome = 'Caio'
obj1.falar()
//obj2.falar()

/*
MUDANDO A REFERENCIA DE UM OBJETO DO PROTOTIPO PAI
PADRAO PARA OUTRO CRIADO
*/
const obj3 = {}
//aqui sera UNDIFINED por nao existir 'nome' em 'Object.prototype'
console.log(obj3.nome)
//realizando a mudancao de herança
obj3.__proto__ = MeuObjeto.prototype
//agora consiguira acessar essa variavel 'nome' por ter mudado de 'pai' rsrsrs
console.log(obj3.nome)
obj3.falar()


// Resumindo
console.log("-------------RESUMINDO--------------------")
console.log("new MeuObject === MeuObjeto.prototype ? ")
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log("MeuObjeto.__proto__ === Function.prototype ?")
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log("Function.prototype.__proto__ === Object.prototype ?")
console.log(Function.prototype.__proto__ === Object.prototype)
//nao ha mais nenhum objeto depois dele
console.log("Object.prototype__proto__ === null ?")
console.log(Object.prototype.__proto__ === null)







const funcs = []

//var nao tem escopo de funcao por isso nao passa os valores
//so continua add +1 ao i ate passar a condicao de lopp
for (var i=0; i<10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[7]()
const funcs = []

//'let' tem escopo de funcao 
for (let i=1; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[7]()
/*
for (let i = 0; i <>> 10; i++) {
    console.log(i)
}
*/

//ERRO: porque ela só é visível no bloco

/*
>
^

SyntaxError: Unexpected token '>'
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1048:15)
    at Module._compile (node:internal/modules/cjs/loader:1083:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1173:10)
    at Module.load (node:internal/modules/cjs/loader:997:32)
    at Module._load (node:internal/modules/cjs/loader:838:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:18:47

Node.js v18.9.0

*/
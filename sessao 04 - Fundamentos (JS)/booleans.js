let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log(!isAtivo)
console.log(!!isAtivo)

isAtivo = 0
console.log(!isAtivo)
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!33)
console.log(!!-656)
console.log(!!' ')
console.log("texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('veradeiro...')
console.log(!!('' || null || 0 || " "))
console.log("falso")
console.log(!!("texto" && ""))
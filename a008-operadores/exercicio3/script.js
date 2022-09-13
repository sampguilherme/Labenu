let operacao1 = 5 > 20 && 5 < 2
let operacao2 = 5 === 5 || 5 === "5"
let operacao3 = !(20 > 50)
let operacao4 = !(20 > 50 || 50 > 70)

console.log(`
5 é maior que 20 e também é menor que 2 - ${operacao1}
5 é igual a 5 ou é igual a "5" - ${operacao2}
negação de (vinte é maior que cinquenta) - ${operacao3}
negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) - ${operacao4}
`)
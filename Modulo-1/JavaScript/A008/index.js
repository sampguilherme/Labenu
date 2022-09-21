/* let saldo = 15
saldo = saldo + 22.40
console.log(saldo)

saldo = saldo - 12.34
console.log(saldo)

saldo = saldo / 3                                                                                             
console.log(saldo)

saldo = saldo * 3.42
console.log(saldo)

let resto = saldo % 3
console.log(resto)

saldo = (saldo - resto) / 3
console.log(saldo) */
/* 
let number1 = 16
let number2 = 23

console.log(number1 === number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2) */

/* let eu = Number(prompt("Qual sua idade?"))
let ela = Number(prompt("Qual idade da sua namorada?"))
console.log("Sua idade é maior do que a da sua namorada?", eu > ela)
console.log(`Vocês tem ${eu - ela} ano(s) de diferença`) */

const praia = true
const maiorIdade = true
const cerveja = true
const passearDeCarro = true

console.log(!maiorIdade && passearDeCarro)

console.log(!maiorIdade && praia && !passearDeCarro)

console.log(praia || passearDeCarro)

console.log(cerveja && !passearDeCarro)

console.log(true  || false || false)
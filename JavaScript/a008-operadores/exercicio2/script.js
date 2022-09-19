let num1 = prompt("Digite o primeiro número:")
let num2 = prompt("Digite o segundo número:")

console.log(`
    O primeiro número é maior que o segundo? ${num1 > num2}
    O primeiro número é igual ao segunfo? ${num1 === num2}
    O primeiro número é divisível pelo segundo? ${num1 % num2 === 0}
    O segundo número é divisível pelo primeiro? ${num2 % num1 === 0}
`)
function soma(num1, num2){
    return num1 + num2
}

function subtracao(num1,num2){
    return num1 - num2
}

function multiplicacao(num1,num2){
    return num1 * num2
}

function divisao(num1,num2){
    return num1 / num2
}

const numero1 = Number(prompt("Digite o primeiro número: "))
const numero2 = Number(prompt("Digite o segundo número: "))

console.log(`
    ${numero1} + ${numero2} = ${soma(numero1, numero2)}
    ${numero1} - ${numero2} = ${subtracao(numero1, numero2)}
    ${numero1} x ${numero2} = ${multiplicacao(numero1, numero2)}
    ${numero1} / ${numero2} = ${divisao(numero1, numero2)}
`)
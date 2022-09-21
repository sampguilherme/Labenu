/* let valores
let soma = 0

while(valores != 0) {
    valores = Number(prompt("Digite mais um número qualquer"))
    soma = soma + valores
    console.log(valores)
    console.log(soma)
} */

/* let num = Number(prompt("Digite o número"))

for (let i = 0; i <= num; i++) {
    console.log(i)
} */

/* let nums = [1, 3, 6, 5, 7, 4, 8]

for (let i = 0; i < nums.length; i++) {
    console.log(`O número do índice ${i} é ${nums[i]}`)
} */

let tipoUsuario = prompt(`Qual seu tipo de usuário? 
- "A": Administrador;
- "B": Usuário comum;
- "C": Usuário assinante`).toUpperCase()

while (tipoUsuario !== "A"){
    alert("Acesso negado!")
    tipoUsuario = prompt("Qual seu tipo de usuário? A|B|C").toUpperCase()
}

alert("Boas vindas, admin")
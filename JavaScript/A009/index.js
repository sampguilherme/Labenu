/* let nome = prompt("Digite seu nome: ")
let favCor = prompt("Qual sua cor favorita?")
let citacao = prompt("Qual sua citação favorita?")

/* console.log("A cor favorita de " + nome + " é " + favCor)
console.log(`Mome: ${nome}  \nCor favorita: ${favCor}`) */

/*let primeiraString = `Nome: ${nome} 
Cor favotira: ${favCor} 
Citação favorita: "${citacao}"`

let segundaString = "A cor favorita de " + nome + " é " + favCor + " e a citação favorita é \'" + citacao + "\'"
console.log(primeiraString)
console.log(segundaString)

console.log(nome.toUpperCase(), nome.length, nome.includes("a" && "A")) */

let nomeUsuario = prompt("Digite seu nome de usuário: ")
let emailUsuario = prompt("Digite seu e-mail: ")

console.log(`O e-mail "${emailUsuario}" foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}, seu nome tem ${nomeUsuario.length} letras`)

console.log(`Substituindo as letras "r" por "l" seu e-mail fica: ${emailUsuario.replaceAll("r", "l")}
O e-mail possui "@"? ${emailUsuario.includes("@")}
`)




console.log('A frase favorita de ' + nome + 'é \"' + citacao + '\"')
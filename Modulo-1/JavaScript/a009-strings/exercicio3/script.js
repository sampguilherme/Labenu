//Crie a const para a frase aqui
const fraseJorge = `Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair`
//const frasePt2 = `"BOAS VINDAS, mas não deixe o gato sair"`
const novaFrase = fraseJorge.replace("verde", "rosa").replace('azul', "laranja")  // frasePt2.toUpperCase("mas não deixe o gato sair")

console.log(`A frase possui verde? ${novaFrase.includes("verde")}
A frase possui laranja? ${novaFrase.includes("laranja")}
` )
console.log(novaFrase.replace('mas não deixe o gato sair', 'MAS NÃO DEIXE O GATO SAIR'))

let aaa = console.log("Sei la")
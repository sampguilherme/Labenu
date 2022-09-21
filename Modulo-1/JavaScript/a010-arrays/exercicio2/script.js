const array1 = [1, 5, 10, 34]
const array2 = ["pão", "mortadela", "queijo"]
const array3 = [4, "presunto", 5>7]

console.log("|---------------------------|")

console.log(` Informações 1º array: 
 Quantidade de itens: ${array1.length} 
 Primeiro item: ${array1[0]}
 Possui o número 1? ${array1.includes(1)}`)

console.log("|---------------------------|")

console.log(` Informações 2º array: 
 Quantidade de itens: ${array2.length} 
 Primeiro item: ${array2[1]}
 Tem mortadela? ${array2.includes("mortadela")}`)

console.log("|---------------------------|")

console.log(` Informações 3º array: 
 Quantidade de itens: ${array3.length} 
 Primeiro item: ${array3[2]}
 Tem o número 5? ${array3.includes(5)}`)
 
console.log("|---------------------------|")
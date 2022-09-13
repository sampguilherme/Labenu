const array1 = [1, 5, 10, 34]
const array2 = ["pão", "mortadela", "queijo"]
const array3 = [4, "presunto", 5>7]
const array1Copia = array1.slice()
const array2Copia = array2.slice()
const array3Copia = array3.slice()

console.log("|------------------------------------------|")

array1Copia.push(7)
console.log(` 1º Arrray:
    Array original: [${array1}] 
    Array copia: [${array1Copia}]`)

console.log("|------------------------------------------|")

array2Copia.pop()
console.log(` 2º Array:
    Array original: [${array2}]
    Array copia: [${array2Copia}]`)

console.log("|------------------------------------------|")

array3Copia.splice(1, 1)
console.log(` 3º Array:
    Array original: [${array3}]
    Array copia: [${array3Copia}]`)

console.log("|------------------------------------------|")
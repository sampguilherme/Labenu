/* const arrayString = ["banana", "abacaxi", "tomate"]
const arrayNum = [1, 2, 3]
const arrayBagunca = ["Aaaa", 5, false]
const arrayUmValor = [21]
const arrayVazio = [] */

/* console.log(arrayString[0], arrayString.length, arrayString[3], arrayBagunca, arrayUmValor[0], arrayUmValor.length) */

/* const segundoArrayString = arrayString
console.log(arrayString)
console.log(segundoArrayString)

segundoArrayString.push("Abobora")
console.log(arrayString)
console.log(segundoArrayString)

const novoArray = arrayString.slice()
console.log("Novo", novoArray)
novoArray.push("Abacaxi")
console.log("original", arrayString)
console.log("Novo", novoArray) */

const arrayNovo = [19, 21, 56, 99, 12]
const array2 = arrayNovo.slice()
arrayNovo.pop()
arrayNovo.push(6) 
console.log(arrayNovo)
array2.splice(2, 1)
console.log(array2)
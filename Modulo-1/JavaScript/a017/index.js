// Sem parâmetros 

/* function olaMundo () {
    console.log("Olá, Mundo!")
}

olaMundo()

// Function normal com parâmetros

 function olaNomes (nome) {
    console.log(`Olá, ${nome}`)
} 

olaNomes("Guilherme")
olaNomes("Geovanna")
olaNomes("Ilza") 

// Funtion não nomeada com parâmetro

 const olaNomes2 = function (name) {
    console.log(`Olá, ${name}`)
}

olaNomes2("Seila") */

/* function somaNumeros (num1, num2){
    const soma = num1 + num2
    console.log(soma)
}

somaNumeros(2,3) 

function somaNumeros (num1, num2){
    return num1 + num2
}

console.log(somaNumeros(2,3)) 

const imprimeNumeros = (array) => {
    const novoArray = []
    novoArray.push(array[0], array[array.length-1])
    return novoArray
}

arrayTeste = [1,2,3,4,5,6,7,8,9] 

console.log(imprimeNumeros(arrayTeste)) 

const numerosPares = (array) => {
    let novoArrayPar = []

    for(let i of array){

        if(i%2 === 0){
            novoArrayPar.push(i)
        }
    }
    return novoArrayPar
}

const arrayTeste2 = [3, 2, 5, 4, 7, 6, 9, 8]

console.log(numerosPares(arrayTeste2)) */

function numerosDivisao(array){
    const novoArray = []
    novoArray.push(array[0]/2, array[array.length-1]/2)
    return novoArray
}

const arrayTest = [3, 3, 4, 5, 6, 7, 9]
const arrayTest2 = [6, 3, 4, 5, 6, 7, 10]

console.log(numerosDivisao(arrayTest))
console.log(numerosDivisao(arrayTest2))
//  EXERCÍCIO A)
function numeros(num1, num2){
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
}

numeros(3,5)

//  EXERCÍCIO B)
function numeroMaiorIgual(num1, num2){
    console.log(`O primeiro número é maior ou igual ao segundo? ${num1 >= num2}`)
}

numeroMaiorIgual(2,2)

//  EXERCÍCIO C)
function numeroPar(num){
    console.log(`${num} é um número par? ${num%2===0}`)
}

numeroPar(4)

//  EXERCÍCIO D)
function mensagem(string){
    console.log(`
    String só em maisculas: ${string.toUpperCase()}
    Tamanho da string: ${string.length}
    `)
}

mensagem("Meu nome é guilherme")
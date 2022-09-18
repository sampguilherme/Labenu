 function olaNome(nome){
    return nome
}

console.log(olaNome("Guilherme")) 

function tabuadaDo6(num){
    for(let i=1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}

tabuadaDo6(6)

// COM ARROW FUNCTION

 const olaNome2 = (nome) => {
    return nome
}

//console.log(olaNome2("Guilherme"))

const tabuada = (num) => {
    for(let i=1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}

//tabuada(6)
let megaSena = [
    [1, 10, 11, 110, 111],
    [2, 20, 22, 220, 222],
    [3, 30, 33, 330, 333],
    [4, 40, 44, 440, 444]
]

// if (megaSena.length === 4) {
//     for (let i=0; i<megaSena.length; i++) {
//         //console.log(`sorteio ${i+1}: ${megaSena[i]}`)

//         let sorteio = `sorteio ${i}:`

//         for (let j=0; j<megaSena[i].length; j++){
//             sorteio += megaSena[i][j] + " "
            
//         }
//         console.log(sorteio)
//     }
// } else {
//     console.log(`É necessário alterar o número de itens do array`)
// }

if (megaSena.length === 4) {
    for (let i in megaSena) {
        //console.log(`sorteio ${i+1}: ${megaSena[i]}`)

        let sorteio = `sorteio ${Number(i)+1}: `

        for (let j of megaSena[i]){
            sorteio += j + " "
            
        }
        console.log(sorteio)
    }
} else {
    console.log(`É necessário alterar o número de itens do array`)
}
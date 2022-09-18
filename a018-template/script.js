/*const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]  */

// PRÁTICA GUIADA MULTIPLICA POR 3
/* const array1 = [1, 2, 3, 4, 5, 6 ,7, 8]

const multiplicaPor3 = (array) => {
  const novoArray = []
  for(let numero of array1){
    novoArray.push(numero * 3)
  }
  return novoArray
} 

console.log(multiplicaPor3(array1)) */

// PRÁTICA GUIADA RETORNA PARES 
// const array = [1, 2, 3, 4, 5, 6 ,7, 8]

// function retornaPares(array){
//   const pares = []
//   for(let numero of array){
//     if(numero % 2 === 0) {
//       pares.push(numero)
//     }
//   }
//   return pares
// }

// console.log(retornaPares(array))

// // PRÁTICA GUIADA MULTIPLICA POR 3 E RETORNA PARES
// const multiplicaERetornaPares = (array, funcao) => {
//   const novoArray = []
//   for(let numero of array) {
//     novoArray.push(numero * 3)
//   }
//   let pares = funcao(novoArray)

//   return pares
// }

// console.log(multiplicaERetornaPares(array , retornaPares))

//const array = [1, 2, 3, 4, 5, 6 ,7, 8]

// const multiplicaComMap = array.map((item) => {
//   return item * 3
// })

// console.log(multiplicaComMap)

// const retornaPares = array.filter((item) => {
//   return item % 2 === 0
// })

// console.log(retornaPares)

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

const restauraVida = pokemons.map((pokemon) => {
  pokemon.vida = 100
  return pokemon
}).filter((pokemon) => {
  return pokemon.tipo === 'fogo'
})

console.log(restauraVida)
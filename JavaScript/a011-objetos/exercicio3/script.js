const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

pokemon1.ataques = []
pokemon2.ataque = {Nome: "Jato de Água", Dano: 40, Precisão: 100, tipo: "Água"}

const ataque1 = {
    Nome: "Folha Navalha", 
    Dano: 45, Precisão: 100, 
    tipo: "Grama"
}

pokemon1.ataques.push(ataque1)

console.log(pokemon1)
console.log("")
console.log(pokemon2)
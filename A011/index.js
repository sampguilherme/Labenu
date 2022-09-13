/* const estudante = {
    nome: "Guilherme",
    sobrenome: "Sampaio",
    numMatricula: 3123,
    notasSemestre: [7, 5, 8]
} 

 console.log(estudante)

estudante.modulo = "Intro ao JS"

 console.log(estudante)

console.log("Nome do estudante:", estudante.nome)
console.log("Sobrenome do estudante:", estudante.sobrenome)
console.log("Segunda nota do semestre:", estudante.notasSemestre[1])
console.log("Modúlo:", estudante.modulo) 

const copiaEstudante = {...estudante,}

copiaEstudante.nome = "AstroDev"
copiaEstudante.notasSemestre.push(9)
copiaEstudante.modulo = "HTML e CSS"

console.log("Copia com nome alterado:", copiaEstudante)
console.log(estudante) */

const carrinho = {
    nomeComprador: "Guilherme",
    formaPagemnto: "PIX",
    Endereco: "Rua BlaBla, 1245 - LimoesVerdes",
}

carrinho.compras = [
    {produto: "Tablet", preco: 1000, quantidade: 1}, 
    {produto: "notebook", preco: 3000, quantidade: 3},
    {produto: "celular", preco: 1500, quantidade: 2} 
]



console.log(carrinho)
const jogos = [
    {
        Jogo: "Minecraft",
        anoLancamento: Number(2009),
        jogoGratuito: false,
        plataformas: "PC, PlayStation, Xbox, Mobile"
    }, 
    {
        Jogo: "Grand Theft Auto V",
        anoLancamento: Number(2013),
        jogoGratuito: false,
        plataformas: "PC, PlayStation ,Xbox"
    },
    {
        Jogo: "The Sims 4",
        anoLancamento: Number(2014),
        jogoGratuito: false,
        plataformas: "PC, PlayStation, Xbox"
    }, 
    {
        Jogo: "Fortnite",
        anoLancamento: Number(2017),
        jogoGratuito: true,
        plataformas: "PC, PlayStation, Xbox, Mobile, Nintendo Switch"
    }

]

    mediaAnosEntreLancamento = (4 + 1 + 3) / 4
let jogosGratuitos = []
let naoGratuitos = []
for(let i in jogos){
    jogos[i].jogoGratuito ? jogosGratuitos.push(jogos[i]) : naoGratuitos.push(jogos[i])
} 

//console.log(`Media entre os anos de lançamentos de um jogo e outro: ${mediaAnosEntreLancamento} anos`)
//console.log(`Todos são gratuitos para jogar? ${jogoGratuito && jogoGratuito2 && jogoGratuito3 && jogoGratuito4}`) // Verifica se todos jogos são gratuitos para jogar

console.log("Jogos gratuitos:", jogosGratuitos)

console.log("===================================================")

console.log("Jogos pagos:", naoGratuitos)

/* console.log(`Jogo: ${jogo2.toUpperCase()}
Ano de lançamento: ${anoLancamento2}
Gratuito para jogar? ${jogoGratuito2}
Plataformas disponiveis: ${plataformas2}
`)

console.log(`Jogo: ${jogo3.toUpperCase()}
Ano de lançamento: ${anoLancamento3}
Gratuito para jogar? ${jogoGratuito3}
Plataformas disponiveis: ${plataformas3}
`)

console.log(`Jogo: ${jogo4.toUpperCase()}
Ano de lançamento: ${anoLancamento4}
Gratuito para jogar? ${jogoGratuito4}
Plataformas disponiveis: ${plataformas4}
`) */
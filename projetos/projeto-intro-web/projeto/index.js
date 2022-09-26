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

let mediaAnosEntreLancamento = (4 + 1 + 3) / 4
let jogosGratuitos = []
let naoGratuitos = []
for(let i in jogos){
    jogos[i].jogoGratuito ? jogosGratuitos.push(jogos[i]) : naoGratuitos.push(jogos[i])
} 

for(jogo of jogos){
    for(propriedade in jogo){
        console.log(`${propriedade}: ${jogo[propriedade]}`)
    }
console.log("=========================================")
}

function funcJogo ()
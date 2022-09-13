const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

// Primeiro ator / atriz
console.log(filme.elenco[0])

// Último ator / atriz
console.log(filme.elenco[filme.elenco.length-1])

// Exibir array com todas transmissões de hoje
console.log(filme.transmissoesHoje)

// Exibir horário de transmissão filme Canal Brasil
console.log("Horário de transmissão no Canal Brasil:", filme.transmissoesHoje[1].horario)
let comerMais = prompt("Você deseja comer mais coxinha? S/N").toUpperCase()
let conta = 2.50

while (comerMais === "S") {
    conta = conta + 2.50
    comerMais = prompt("Você deseja comer mais coxinha? S/N").toUpperCase()
}

alert(`Sua conta ficou R$ ${conta} no total`)
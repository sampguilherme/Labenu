//Item 0
const itemNovo = document.createElement("li")

const conteudoItemNovo = document.createTextNode("item 0")

itemNovo.appendChild(conteudoItemNovo)

const elementoReferencia = document.getElementById("lista")

elementoReferencia.insertAdjacentElement("afterbegin", itemNovo)

//Item 5
const itemFinal = document.createElement("li")

const conteudoItemFinal = document.createTextNode("item 5")

itemFinal.appendChild(conteudoItemFinal)

elementoReferencia.insertAdjacentElement("beforeend", itemFinal)
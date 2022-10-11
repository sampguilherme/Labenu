function removeItem(event) {
    event.target.remove()
}

function adicionaItem(event){
    event.preventDefault()
    const novoElemento = document.createElement("article")
    
    novoElemento.classList.add("item2")
    novoElemento.onclick = removeItem

    const referencia = document.getElementById("botao")
    referencia.insertAdjacentElement("afterend", novoElemento)
}
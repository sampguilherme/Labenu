function insereItem(event) {
    let elementoNovo = document.createElement("li")

    let input = document.getElementById("meu-input")

    elementoNovo.innerHTML = input.value

    let referencia = document.getElementById("lista")

    referencia.insertAdjacentElement("beforeend", elementoNovo)

    input.value = ""
}
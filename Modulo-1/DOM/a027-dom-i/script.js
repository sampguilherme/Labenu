const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1").innerHTML=frutas[0]
const fruta2 = document.getElementById("fruta-2").innerHTML = frutas[1]
const fruta3 = document.getElementById("fruta-3").innerHTML = frutas[2]
const fruta4 = document.getElementById("fruta-4")

const frutaAdicionada = () => {
    const fruta = document.getElementById("fruta")
    fruta4.innerHTML = fruta.value
    fruta.value = ""
}
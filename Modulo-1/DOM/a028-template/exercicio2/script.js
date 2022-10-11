function escondeSenha(event){
    event.preventDefault()
    const inputSenha = document.getElementById("password")
    inputSenha.setAttribute("type", "password")
}

const corFormulario = document.querySelector(".light")
corFormulario.classList.remove("light")
corFormulario.classList.add("dark")
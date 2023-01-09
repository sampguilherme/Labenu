import axios from "axios";
import { useEffect, useState } from "react";

export const Usuario = (props) =>{
    const [usuario, setUsuario] = useState([])
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    const pegarUsarioId = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${props.id}`, {
            headers: {
                Authorization: "guilherme-sampaio-ammal"
            }
        })
        .then((resposta) => {
            console.log(resposta.data)
            setUsuario(resposta.data)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    useEffect(() => {
        pegarUsarioId()
    }, [])

    const editaUsuario = () => {
        const body = {
            name: nome,
            email: email
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`, body, {
            headers: {
                Authorization: "guilherme-sampaio-ammal"
            }
        })
        .then((resposta) => {
            pegarUsarioId()
        })
        .catch((erro) => {

        })
    }

    const deletaUsuario = () => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`, {
            headers: {
                Authorization: "guilherme-sampaio-ammal"
            }
        })
        .then((resposta) => {
            alert("Usuario removido com sucesso")
            props.pegarUsuarios()
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    return (
        <>
            <input
                placeholder="nome"
                value={nome}
                onChange={(e) => {setNome(e.target.value)}}
            />
            <input
                placeholder="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
            />
            <button onClick={editaUsuario}>Editar Usuario</button>
            <button onClick={deletaUsuario}>Deletar Usuario</button>

            <p>{usuario.name}</p>
            <p>{usuario.email}</p>
            
        </>
    )
}
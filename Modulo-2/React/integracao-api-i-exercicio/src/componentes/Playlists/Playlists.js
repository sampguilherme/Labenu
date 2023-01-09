import React, {  useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";
import axios from "axios"



function Playlists() {
    const [playlists, setPlaylists] = useState([])
    const [novaPlaylist, setNovaPlaylist] = useState("")

    const headers = {
        headers: {
            Authorization: "guilherme-sampaio-ammal"
        }
    }

    const getAllPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", headers)
        .then((resposta) => {
            setPlaylists(resposta.data.result.list)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }
    
    useEffect(() => {
        getAllPlaylists()
    }, [])

    const createPlaylist = async () => {
        const body = {
            name: novaPlaylist
        }
        try {
            const res = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, body, {
                headers:{
                    Authorization: "guilherme-sampaio-ammal"
                }
            })
            setNovaPlaylist()

        } catch (error) {
            console.log(error.response)
        }
    }
    
    return (
        <div>
            <input placeholder="Nome da playlist"/>
            <button onClick={createPlaylist}>Adicionar playlist</button>
            {playlists.map((playlist) => {
                return <Musicas key={playlist.id} playlist={playlist}/>
            })}
            
        </div>
    );
}

export default Playlists;

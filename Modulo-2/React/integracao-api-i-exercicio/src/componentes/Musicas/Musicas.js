import React, { useEffect, useState } from 'react'
import { Botao, ContainerInputs, ContainerMusicas, InputMusica, Musica } from './styled'
import axios from 'axios'

export default function Musicas(props) {
    const [musicas, setMusicas] = useState([])
    const [artista, setArtista] = useState("")
    const [nomeMusica, setNomeMusica] = useState("")
    const [url, setUrl] = useState("")

    const headers = {
        headers: {
            Authorization: "guilherme-sampaio-ammal"
        }
    }

    const getPlaylistTracks = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`, headers)
        .then((resposta) => {
            setMusicas(resposta.data.result.tracks)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    useEffect(() => {
        getPlaylistTracks()
    }, [])

    const body = {
        name: nomeMusica,
        artist: artista,
        url: url
    }

    const addTrackToPlaylist = () => {
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`, body,headers)
        .then((resposta) => {
            getPlaylistTracks()
        })
        .catch((erro) => {
            console.log(erro)
        })
    } 

    const removeTrackFromPlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks/${id}`, headers)
        .then((resposta) => {
            console.log(resposta)
            getPlaylistTracks()
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    return (
        <ContainerMusicas>
            <h2>{props.playlist.name}</h2>
            {musicas.map((musica) => {
                return (
                    <Musica key={musica.id}>
                        <h3>{musica.name} - {musica.artist}</h3>
                        <audio src={musica.url} controls />
                        <button onClick={() => removeTrackFromPlaylist(musica.id)}>X</button>
                    </Musica>)
            })}
            <ContainerInputs>
                <InputMusica placeholder="artista" 
                value={artista}
                onChange={(e) => setArtista(e.target.value)}
                />
                <InputMusica placeholder="musica" 
                value={nomeMusica}
                onChange={(e) => setNomeMusica(e.target.value)}
                />
                <InputMusica placeholder="url" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                />
                <Botao onClick={addTrackToPlaylist}>Adicionar musica</Botao>
            </ContainerInputs>
        </ContainerMusicas>
    )
}


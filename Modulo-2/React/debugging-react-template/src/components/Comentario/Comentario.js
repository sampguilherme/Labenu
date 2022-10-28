import React from 'react'
import { ComentarioStyle } from './styled'


export default function Comentario(props) {
    return (
        <ComentarioStyle>
            <input 
            placeholder="Adicionar comentario" 
            onChange={props.adicionaComentario} 
            value={props.comentario}/>
            <button onClick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.comentario}</p>
        </ComentarioStyle>
    )
}

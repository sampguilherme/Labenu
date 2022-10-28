import React from 'react'
import {ContainerPostagem, Image, Description, Titulo} from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
            <Titulo>{props.titulo}</Titulo>
            <Image src={props.urlFoto} alt={props.descricao}/>
            <Description>{props.descricao}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem
import React from 'react';
import {LayoutCardGrande, ImgCardGrande, TituloCardGrande, InfosCard} from "./styles"
import styled from 'styled-components';


export function CardGrande(props) {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfosCard>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCard>
        </LayoutCardGrande>
    )
}
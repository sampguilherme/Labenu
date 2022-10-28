import React from 'react';
import { LayoutCardPequeno, TituloCardPequeno, InfosCardPequeno, ImgCardPequeno} from "./styles"

export function CardPequeno(props) {
    return (
        <LayoutCardPequeno>
            <ImgCardPequeno src={props.imagem} />
            <InfosCardPequeno>
                <TituloCardPequeno>{props.nome}</TituloCardPequeno>
                <p>{props.description}</p>
            </InfosCardPequeno>
        </LayoutCardPequeno>
    )
}

export default CardPequeno
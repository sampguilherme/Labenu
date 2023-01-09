import React from "react";
import { priceFormmater } from "../../utils/priceFormatter";
import { CardContainer, Image, P } from "./style";

export default function CardCart(props){
    
    const { games } = props
 
    return (
        <CardContainer>
            <Image src={games.image} alt={games.name}/>
            <P>Jogo: {games.name}</P>
            <P>{priceFormmater.format(games.price)}</P>
            <span>Quant: </span>
            <span>{games.quantity}</span>
        </CardContainer>
    )
}
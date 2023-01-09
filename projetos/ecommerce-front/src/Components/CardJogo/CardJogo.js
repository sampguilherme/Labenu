import React from "react";
import { Button, CardContainer, Image, P } from "./style";


export default function CardJogo(props) {
    return (
        <CardContainer>
            <Image src={props.image} alt={props.name}/>
            <P>{props.name}</P>
            <P>R$ {props.price}</P>
            <Button onClick={() => props.addProduct(props.id)}>Comprar</Button>
        </CardContainer>
    )
}


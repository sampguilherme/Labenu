import React from "react";
import { Carros } from "./Carros";

export function Garagem () {
    const nome = "Guilherme"
    return(
        <>
        <h1>
            Garagem de {nome}
        </h1>
        <Carros/>
        <Carros/>
        <Carros/>
        <Carros/>
        </>
    )
}
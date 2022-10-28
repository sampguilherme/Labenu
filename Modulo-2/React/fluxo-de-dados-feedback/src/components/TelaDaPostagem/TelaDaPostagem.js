import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  const infos = [props.titulo, props.postagem, props.descricao]
  return (
    <ContainerPostagem>
      <TitleHeader>{infos[0]}</TitleHeader>
      <Image src={infos[1]} alt={infos[2]}/>
      <Description>{infos[2]}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;

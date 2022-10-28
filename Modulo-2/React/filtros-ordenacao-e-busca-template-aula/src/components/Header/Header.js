import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const onChangeBuscaId = (e) => {
    props.setBuscaId(e.target.value)
  }
  const onChangeBuscaNome = (e) => {
    props.setBuscaNome(e.target.value)
  }
  const onChangeOrdenaAlfabeto = (e) => {
    props.setOrdenaAlfabeto(e.target.value)
  }
  const onChangeFiltraTipo = (e) => {
    props.setFiltraTipo(e.target.value)
  }

  return (
    <Container>
      <input 
      type="number" 
      placeholder="Buscar por id" 
      value={props.buscaId} 
      onChange={onChangeBuscaId}/>

      <input 
      type="text" 
      placeholder="Buscar por nome" 
      value={props.buscaNome} 
      onChange={onChangeBuscaNome}/>
      
      <select value={props.ordenaAlfabeto} onChange={onChangeOrdenaAlfabeto}>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <select name="tipo" id="tipo" value={props.filtraTipo} onChange={onChangeFiltraTipo}>
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;

import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import userEvent from "@testing-library/user-event";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [idFilter, setIdFilter] = useState("");
  const [filtrarTipo, setFiltrarTipo] = useState("")
  const [ordemAlfabetica, setOrdemAlfabetica] = useState("")

  return (
    <>
      <GlobalStyle />
      <Header
        idFilter={idFilter}
        setIdFilter={setIdFilter}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        filtrarTipo={filtrarTipo} 
        setFiltrarTipo={setFiltrarTipo}
        ordemAlfabetica={ordemAlfabetica}
        setOrdemAlfabetica={setOrdemAlfabetica}
      />
      <CardsContainer>
        {pokemons.filter((pokemon) => {
          return idFilter ? pokemon.id.includes(idFilter) : pokemon
        })
          .filter((pokemon) => {
            return pokemon.name.english.toLowerCase().includes(pesquisa.toLowerCase());
          })
          .filter((pokemon) =>{
            return filtrarTipo ? pokemon.type.includes(filtrarTipo) : pokemon
          })
          .sort((a, b) =>{
            if(ordemAlfabetica === "crescente"){
              if(a.name.english < b.name.english){
                return -1
            } else {
              return 1
            }
          } else if(ordemAlfabetica === "decrescente"){
              if(a.name.english < b.name.english){
                return 1
              } else {
                return -1
              }
          }
          })
          .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>
    </>
  );
}

export default App;

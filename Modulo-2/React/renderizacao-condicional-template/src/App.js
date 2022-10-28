import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import React from "react";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  `
const MainContainer = styled.main`
  height: 100vh;
  `

function App() {
  const [tela, setTela] = useState(1)
  
  function mudaTela(){
    setTela(2)
  }
  //Switch case
   switch(tela){
    case 1:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin mudaTela={mudaTela}/>
        </MainContainer>
      );
    case 2:
      return (
      <MainContainer >
        <GlobalStyled />
        <TelaCadastro setTela={setTela}/>
      </MainContainer>
    );

    case 3:
      return (
      <MainContainer >
        <GlobalStyled />
        <TelaUsuarioCadastrado />
      </MainContainer>
    );

    default: 
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin />
        </MainContainer>
      );
  } 

  //Expressions

  /*return (
    <MainContainer >
      <GlobalStyled />
      {tela === 1 ? <TelaLogin mudaTela={mudaTela}/> : <TelaCadastro tela={tela} setTela={setTela}/>}
    </MainContainer>
  ); */
}

export default App;
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [fotoPerfil, setFotoPerfil] = useState("")
  const [name, setName] = useState("")

  const [postagem, setPostagem] = useState("")
  const [descricao, setDescricao] = useState("")
  const [titulo, setTitulo] = useState("")

  const [pageFlow, setPageFlow] = useState(1);

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header name={name} fotoPerfil={fotoPerfil}/>
          {pageFlow === 1 ? (
            <FormularioLogin
            setPageFlow={setPageFlow} 
            name={name} setName={setName} 
            fotoPerfil={fotoPerfil}
            setFotoPerfil={setFotoPerfil}/>
          ) : (
            <FormularioPostagem 
            postagem={postagem}
            setPostagem={setPostagem}
            descricao={descricao}
            setDescricao={setDescricao}
            titulo={titulo}
            setTitulo={setTitulo}/>
          )}
        </aside>
        <TelaDaPostagem 
         postagem={postagem}
         descricao={descricao}
         titulo={titulo}/>
      </Container>
    </>
  );
}

export default App;

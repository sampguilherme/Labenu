import Garagem from "./Componentes/Garagem/Garagem";
import "./styles.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function App() {
  const nome = "Amma";
  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <>
      <GlobalStyle/>
        <div className="App">
          <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
        </div>
    </>
  );
}

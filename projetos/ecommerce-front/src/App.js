import { Header } from "./Components/Header/Header/Header";
import { createGlobalStyle } from "styled-components";
import { Produtos } from "./Components/Produtos/Produtos";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Produtos/>
    </>
  )
}

export default App;

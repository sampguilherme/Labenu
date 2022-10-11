import React from "react";
import "./App.css";
import { Garagem } from "./componentes/Garagem";
import { Footer } from "./componentes/Footer";

export default function App() {
  const onClickBotao = () => {
    alert("Botão foi clicado!");
  };

  return (
    <div className="App">
      <Garagem/>
      <Footer/>
    </div>
  );
}

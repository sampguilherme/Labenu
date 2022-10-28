import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome1 = "Guilherme"
  const nome2 = "Geovanna"
  function apresentaGaragem(){
    alert(`Boas vindas à garagem do ${nome1}`)
  }
  function apresentaGaragem2(){
    alert(`Boas vindas à garagem da ${nome2}`)
  }

  return (
    <div className="App">
      <Garagem nome={nome1} mensagemApresentacao = {apresentaGaragem}/>
      <Garagem nome={nome2} mensagemApresentacao = {apresentaGaragem2}/>
    </div>
  );
}

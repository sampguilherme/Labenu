import Carro from "../Carro/Carro";
import {BtnMensagem, FundoColorido} from "./style"

function Garagem(props) {
  return (
    <FundoColorido>
      <h1>Garagem da {props.nome}</h1>
      <BtnMensagem onClick={props.mensagemAprentacao}>Mensagem</BtnMensagem>
      <Carro
        adicionadoPor={props.nome}
        cor={"Vermelho"}
        ano={2022}
        flex={"true"}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={"Verde"}
        ano={2020}
        flex={"false"}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={"Amarelo"}
        ano={2009}
        flex={"false"}
      />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
    </FundoColorido>
  );
}

export default Garagem;

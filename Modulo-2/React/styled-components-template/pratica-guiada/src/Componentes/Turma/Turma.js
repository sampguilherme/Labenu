import Estudante from "../Estudante/Estudante.js";
import {BotaoApresentar, FundoColorido} from "./style"

function Turma(props) {
  return (
    <FundoColorido>
      <h1>Turma {props.turma}</h1>
      <h4>Responsável:{props.responsavel}</h4>
      <BotaoApresentar onClick={props.apresentar}>Apresentar</BotaoApresentar>

      <Estudante
        nome={"Clarinha"}
        idade={40}
        corDaRoupa={"preta"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Marcelo"}
        idade={25}
        corDaRoupa={"azul"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Luiz"}
        idade={18}
        corDaRoupa={"verde"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Muri"}
        idade={39}
        corDaRoupa={"amarelo"}
        criadoPor={props.responsavel}
      />
    </FundoColorido>
  );
}

export default Turma;

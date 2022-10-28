import {ContainerEstudante} from "./styles"

function Estudante(props) {
  return (
    <ContainerEstudante>
      <ul>
        <li>nome: {props.nome}</li>
        <li>idade: {props.idade}</li>
        <li>corDaRoupa:{props.corDaRoupa}</li>
        <li>criadoPor:{props.criadoPor}</li>
      </ul>
    </ContainerEstudante>
  );
}

export default Estudante;

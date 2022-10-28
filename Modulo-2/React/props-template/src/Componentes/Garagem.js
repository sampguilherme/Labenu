import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem do {props.nome}</h1>
      <button onClick={props.mensagemApresentacao}>Boas-vindas</button>
      <Carro adicionadoPor={props.nome} carro={"Mustang"} cor={"Vermelho"} ano={2022} flex={"true"}/>

      <Carro adicionadoPor={props.nome} carro={"Ferrari"} cor={"Preto"} ano={2019} flex={"false"}/>

      <Carro adicionadoPor={props.nome} carro={"Lancer EVO"} cor={"Prata"} ano={2017} flex={"false"}/>

      <Carro adicionadoPor={props.nome} carro={"Jaguar"} cor={"Branco"} ano={2021} flex={"true"}/>

      <Carro adicionadoPor={props.nome} carro={"Fusca"} cor={"Azul"} ano={1998} flex={"false"}/>

      <Carro adicionadoPor={props.nome} carro={"Supra"} cor={"Vermelho"} ano={1993} flex={"false"}/>

      <Carro adicionadoPor={props.nome} carro={"Camaro"} cor={"Amarelo"} ano={"2016"} flex={"False"}/>

      <Carro adicionadoPor={props.nome} carro={"Palio"} cor={"Vermelho"} ano={2014} flex={"true"}/>
    </div>
  );
}

export default Garagem;

function Carro(props) {
  return (
    <div>
      <h2>{props.carro}</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>Adicionado Por: {props.adicionadoPor}</li>
      </ul>
    </div>
  );
}

export default Carro;

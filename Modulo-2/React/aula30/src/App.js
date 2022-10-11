import logo from './logo.png';
import './App.css';

function App() {
  const onClickBotao = () => {
    alert("Botão foi clicado!");
}

  return (
    <div className="App">
      <div class="container">
        <h1>Aprenda React na Labenu!</h1>
        <div>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <a href="https://labenu.com.br">Site da Labenu</a>
          </div>
          <div>
            <button onClick={onClickBotao}> Clique aqui! </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

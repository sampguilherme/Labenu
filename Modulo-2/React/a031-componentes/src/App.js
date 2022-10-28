import React from "react";
import "./styles.css";
import { CardVideo } from "./Componentes/CardVideo";

export default function App() {
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo titulo={"Matuê, Teto & WIU - VAMPiro"} imagem={"https://picsum.photos/400/400?a=1"} usuario="Guilherme"/>

            <CardVideo titulo={"Chase Atlantic playlist"} imagem={"https://picsum.photos/400/400?a=2"} usuario="Geovanna"/>

            <CardVideo titulo={"Mix de Hip hop"} imagem={"https://picsum.photos/400/400?a=3"} usuario="Ilza"/>

            <CardVideo titulo={"Mix de Rap nacional"} imagem={"https://picsum.photos/400/400?a=4"} usuario="Givaldo"/>

            <CardVideo titulo={"DNASTY - Aulas e Cursos"} imagem={"https://picsum.photos/400/400?a=5"} usuario="Lucas"/>

            <CardVideo titulo={"DRIP DA ROÇA"} imagem={"https://picsum.photos/400/400?a=6"} usuario="Jaynne"/>

            <CardVideo titulo={"DRIP DA ROÇA 2"} imagem={"https://picsum.photos/400/400?a=7"} usuario="Pedro"/>

            <CardVideo titulo={"Borges - Iphone Branco"} imagem={"https://picsum.photos/400/400?a=8"} usuario="Marcia"/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

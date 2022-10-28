import React from 'react';
import {CardGrande} from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled, { createGlobalStyle } from 'styled-components'
import imagemPerfil from "./img/DP-Brock.png"
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import downArrow from "./img/down-arrow.png"
import iconePedra from "./img/rock-symbol.jpg"
import iconeEstadio from "./img/pewter-gym.jpg"
import iconeEmail from "./img/email.png"
import iconePin from "./img/pin-endereco.png"
import iconeFB from "./img/facebook-logo-3.png"
import iconeTT from "./img/twitter-logo-1-1.png"


const GlobalStyle = createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }`

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  `

const SectionPagina = styled.section`
    width: 40vw;
    margin: 10px 0;
  `

const Titulos = styled.h2`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  `

function App() {
  const perfil = {
    nome: "Brock",
    imagem: imagemPerfil,
    descricao: "Iniciei minha carreira como treinador pokémon, especializado em pokémons de pedra e, atualmente sou líder do estádio de Pewter City.",
    email: "brock@pewtergym.com",
    cidade: "Pewter",
    experiencia: [
      {
        empresa: "Estádio de Pewter City",
        icone: iconeEstadio,
        descricao: "Atualmente sou o líder do Estádio de Pewter City, sou responsável pelo gerenciamento do estádio, batalhas e entrega da insígnia para treinadores pokémon desafiantes que chegam ao estádio."

      },
      {
        empresa: "Treinador pokémon - freelancer",
        icone: iconePedra,
        descricao: "Fui treinador pokémon durante a juventude. Acompanhei Ash Ketchum e Misty na busca por insígnias. Participei da franquia de filmes e algumas temporadas da série original."
      }
    ]
  }
  return (
    <ContainerApp>
      <GlobalStyle />
      <SectionPagina>
        <Titulos>Dados pessoais</Titulos>
        <CardGrande
          imagem={perfil.imagem}
          nome={perfil.nome}
          descricao={perfil.descricao}
        />

        <ImagemButton
          imagem={downArrow}
          texto="Ver mais"
        />
      </SectionPagina>

      <SectionPagina>
        <CardPequeno
          imagem={iconeEmail}
          nome="E-mail:"
          description={perfil.email}
        />
      </SectionPagina>
      <SectionPagina>
        <CardPequeno
          imagem={iconePin}
          nome="Cidade:"
          description={perfil.cidade}
        />
      </SectionPagina>


      <SectionPagina>
        <Titulos>Experiências profissionais</Titulos>
        <CardGrande
          imagem={perfil.experiencia[0].icone}
          nome={perfil.experiencia[0].empresa}
          descricao={perfil.experiencia[0].descricao}
        />

        <CardGrande
          imagem={perfil.experiencia[1].icone}
          nome={perfil.experiencia[1].empresa}
          descricao={perfil.experiencia[1].descricao}
        />
      </SectionPagina>

      <SectionPagina>
        <Titulos>Minhas redes sociais</Titulos>
        <ImagemButton
          imagem={iconeFB}
          texto="Facebook"
        />
        <ImagemButton
          imagem={iconeTT}
          texto="Twitter"
        />
      </SectionPagina>
    </ContainerApp>
  );
}

export default App;

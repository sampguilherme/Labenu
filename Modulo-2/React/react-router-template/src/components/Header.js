import { useNavigate } from 'react-router-dom';
import {goToHomePage, goToLoginPage, goToProfilePage} from '../Router/coordinator'

function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <button onClick={() =>goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => goToProfilePage(navigate, 'Guilherme')}>
        Ir para página de perfil
      </button>
      <button onClick={() => goToLoginPage(navigate)}>
        Ir para página de login
      </button>
    </header>
  );
}

export default Header;

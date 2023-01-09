import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProfilePage() {
  const params = useParams()
  return (
    
    <main>
      <Header />
      <h1>Página acerca do usuário {params.nome}</h1>
    </main>
  );
}

export default ProfilePage;

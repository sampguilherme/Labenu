import {TitleHeader, Image, Container} from './styled'

export const Header = (props) => {

    return(
    <Container>
        <Image src={props.fotoPerfil} alt="Foto de Perfil"/>
        <p>{props.name}</p>
        <TitleHeader>
            Insta4
        </TitleHeader>
    </Container>
    )
}
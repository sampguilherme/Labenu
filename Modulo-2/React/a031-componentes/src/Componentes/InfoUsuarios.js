import usuario from "./usuario.png"

export function InfoUsuario(props){
    return (
        <div className="info-usuario">
            <img src={usuario} alt="img usuario" height="30vh"/>
            <p>{props.usuario}</p>
        </div>    
    )
}
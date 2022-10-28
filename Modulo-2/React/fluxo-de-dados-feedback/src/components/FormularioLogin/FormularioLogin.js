import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = () => {
    props.setPageFlow(2);
  };

  function onChangeName(e){
    props.setName(e.target.value)
  }

  function onChangeFotoPerfil(e){
    props.setFotoPerfil(e.target.value)
  }
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.name} onChange={onChangeName}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={props.fotoPerfil} onChange={onChangeFotoPerfil}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;

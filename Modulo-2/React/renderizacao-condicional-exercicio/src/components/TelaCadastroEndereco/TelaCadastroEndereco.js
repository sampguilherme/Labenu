import {StyledLabel, FormContainer, Input, SendButton, Form} from "./styled"

export function TelaCadastroEndereco(props){
    return(
        <FormContainer>
            <h1>Cadastro Endereço</h1>
                <Form>
                    <StyledLabel>
                        Endereço:
                        <Input id="endereco" />
                    </StyledLabel>
                    <StyledLabel>
                        Número da residência:
                        <Input id="numeroResidencia" />
                    </StyledLabel>
                    <StyledLabel>
                        Complemento:
                        <Input id="complemento" />
                    </StyledLabel>
                    <StyledLabel>
                        Telefone:
                        <Input id="telefone" />
                    </StyledLabel>
                    <SendButton onClick={() => props.mudarTela(3)}>Próxima página</SendButton>
                </Form>
        </FormContainer>
    )
}
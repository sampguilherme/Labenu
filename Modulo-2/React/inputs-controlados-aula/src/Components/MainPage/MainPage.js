import React, {useState} from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

  const onChangeName = (event) => {
    setNome(event.target.value)
  }
  const onChangeIdade = (event) => {
    setIdade(event.target.value)
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const enviarDados = () => {
    const dados = {nome, idade, email}
    console.log(dados)
    setNome("")
    setIdade("")
    setEmail("")
  }
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input onChange={onChangeName} value={nome}/>
        </label>
        <label>
          Idade:
          <Input onChange={onChangeIdade} value={idade}/>
        </label>
        <label>
          E-mail:
          <Input onChange={onChangeEmail} value={email}/>
        </label>
      <button onClick={enviarDados}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
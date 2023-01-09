import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  const [form, onChangeForm] = useForm({nome: "", idade: "", email: "", profissao: ""});
  // const [nome, setNome] = useState("")
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")

  // const [form, setForm] = useState({nome: "", idade: "", email: ""})

  // const onChangeForm = (event) => {
  //   const  {name, value} = event.target;
  //   const novoForm = {
  //     ...form,
  //     [name]: value
  //   }
  //   setForm(novoForm)
  // }

  // const onChangeNome = (event) => {
  //   setForm({...form, nome: event.target.value})
  // }

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  const handleClick = (event) => {
    event.preventDefault()
    console.log(form)
    // console.log(`nome: ${form.nome}, idade: ${form.idade}, e-mail: ${form.email}, profissao: ${form.profissao} `)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          id="nome"
          name="nome"
          type="text"
          value={form.nome}
          onChange={onChangeForm}
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          type="number"
          id="idade"
          name="idade"
          value={form.idade}
          onChange={onChangeForm}
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          id="email"
          name="email"
          value={form.email}
          onChange={onChangeForm}
        />

        <label htmlFor="profissao">Profissão:</label>
        <Input
          id="profissao"
          type="text"
          name="profissao"
          value={form.profissao}
          onChange={onChangeForm}
          required
        />
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage

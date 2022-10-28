import React from 'react'
import { Form} from '../MainPage/styles'

const ConfirmationForm = () => {
  const [data, setData] = useState("");

  const onChangeData = (event) => {
    console.log(event.target.value)
    setData(event.target.value)
  }
  return (
    <Form>
      <label>
        Data de nascimento:
        <input type="date" onChange={onChangeData} value={data}/>
      </label>
      <label>
        Gênero:
        <select>
          <option value="Homem">Homem</option>
          <option value="Mulher">Mulher</option>
          <option value="Pessoa não binária">Pessoa não binária</option>
          <option value="Prefiro não opinar">Prefiro não opinar</option>
        </select>
      </label>
      <button>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm
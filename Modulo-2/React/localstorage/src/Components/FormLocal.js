import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [listaTarefa, setListaTarefa] = useState([]);

 const saveData = () => {
  localStorage.setItem("user", nome)
 }
 const saveList = () => {
  const stringficado = JSON.stringify(listaTarefa)
  localStorage.setItem("list", stringficado)
 }

  const loadData = () => {
    const nomeLoad = localStorage.getItem("user")
    setNome(nomeLoad)
  }
  const loadList = () => {
    const paseado = JSON.parse(localStorage.getItem("list"))
    setListaTarefa(paseado)
  }

  const atualizarLista = () => {
    setListaTarefa([tarefa, ...listaTarefa])
  }

  useEffect(()=>{
    if (nome !== ""){
      localStorage.setItem("user", nome)
    }
  },[nome])

  return (
    <Form>
      <h3>Prática 1</h3>
      <label htmlFor="nome">
        nome:
        <input 
          name="nome" 
          id="nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      {nome}
      <div>
        <button onClick={saveData}>Guardar Dados</button>
        <button onClick={loadData}>Acessar Dados</button>
      </div>
      <br />
      <h3>Prática 2</h3>
      <label htmlFor="tarefa">
        tarefa:
        <input name="tarefa" id="tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)}/>
      </label>
      <button type="button" onClick={atualizarLista}>adicionar Tarefa</button>
      <ul>
        {listaTarefa.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
      <div>
        <button onClick={saveList}>Guardar tarefa</button>
        <button onClick={loadList}>Acessar tarefa</button>
      </div>
    </Form>
  );
}

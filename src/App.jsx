import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListaTarefas from "./componentes/Task/Tarefas";
import Header from "./componentes/Header";
import "./app.css";
import AddTask from "./componentes/AdicionarTarefa/AddTask";

//componente principal
const App = () => {
  const [tarefas, setTarefas] = useState([]);

  const clickConcluida = (tarefaId) => {
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === tarefaId) return { ...tarefa, concluida: !tarefa.concluida };
      return tarefa;
    });

    setTarefas(novasTarefas);
  };

  //cria uma nova tarefa
  const adicionartarefa = (textoTarefa) => {
    const novaTarefa= [
      ...tarefas,
      {
        title: textoTarefa, //pega o texto digitado
        id: uuidv4(), //cria um ID único
        concluida: false,
      },
    ];
    setTarefas(novaTarefa); //atualiza a lista
  };

  //excluir tarefa
  const deletar = (tarefaId) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== tarefaId);
    setTarefas(novasTarefas); //atualiza a lista
  };

  return (
    <>
      <div className="container">
        <Header />
        <AddTask adicionartarefa={adicionartarefa} />
        <ListaTarefas tarefas={tarefas} clickConcluida={clickConcluida} deletar={deletar} />
      </div>
    </>
  );
};

export default App;

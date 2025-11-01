import React from "react";
import Tarefa from "./Tarefa";

const ListaTarefas = ({ tarefas, clickConcluida, deletar }) => {
  return (
    <>
      {tarefas.map((tarefa) => (
        <Tarefa tarefa={tarefa} 
        clickConcluida={clickConcluida} 
        deletar={deletar} />
      ))}
    </>
  );
};
export default ListaTarefas;

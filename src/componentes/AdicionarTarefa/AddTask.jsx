import React, { useState } from "react";
import Button from "../Button/Button";
import "./AddTask.css";

const AddTask = ({ adicionartarefa }) => {
  //inputData guarda o que você digita
  const [inputData, setInputData] = useState("");

  //atualiza o inputData conforme for digitando
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  //quando clica no botão de adicionar
  const clicaradicionar = () => {
    if (inputData === '') return; 
    adicionartarefa(inputData); 
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData} //mostra o que foi digitado
        className="add-task-input"
        type="text"
        placeholder="Qual os planos para hoje?..."
      />
      <div className="add-task-button-container">
        <Button onClick={clicaradicionar}>Adicionar</Button>
        {/*quando o botão for clicado chama a função */}
      </div>
    </div>
  );
};

export default AddTask;

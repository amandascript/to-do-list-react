import React from 'react';
import { CgClose  } from 'react-icons/cg';
import './Tarefa.css';

const Tarefa = ({tarefa, clickConcluida, deletar}) => {
  return (
     <div 
        className='task-container' 
        onClick={() => 
       clickConcluida(tarefa.id)}
       style={tarefa.concluida ? {background: ' #4a3a66'} : {}}>
      {/*quando a tarefa estiver marcada como concluida vai mudar a cor do background*/}
        <div 
           className="task-title" 
           onClick={() =>
          clickConcluida(tarefa.id)}
          style={{textDecoration:tarefa.concluida ? 'line-through' : 'none' , color: tarefa.concluida ? '#fff' : ''
        /*quando a tarefa tiver marcada como concluida irá mudar a cor do fundo e  cor da letra*/
        }}>
          {tarefa.title} 
        </div>
      
        <div className='buttons-container'>
         <button 
            className='remove-task-button' 
           onClick={(e) => {e.stopPropagation();
            deletar(tarefa.id);}}> {/*evita marcar como conclída ao clicar no botão de deletar*/}
           <CgClose />
         </button>
        </div>
    </div>
  );
  
};
 
export default Tarefa;
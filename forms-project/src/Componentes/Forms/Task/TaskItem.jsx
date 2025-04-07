import React from 'react';
import './TaskItem.css';

const TaskItem = ({ tarefa, removerTarefa, TarefaConcluida }) => {
    return (
        <div className="task-item">
            <span className={`task-text ${tarefa.concluida ? 'concluida' : ''}`}>
                {tarefa.tarefa}
            </span>
            <div className="task-buttons">
                <button onClick={() => TarefaConcluida(tarefa.id)}>
                    {tarefa.concluida ? 'Desfazer' : 'Concluir'}
                </button>
                <button onClick={() => removerTarefa(tarefa.id)}>
                    Remover
                </button>
            </div>
        </div>
    );
};

export default TaskItem;

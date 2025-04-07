import React, { useState } from 'react';
import Forms from './Componentes/Forms/Forms';
import TaskList from './Componentes/Forms/Task/Lista';
import './App.css';

const App = () => {
    const [tarefas, setTarefas] = useState([

    ]);

    const adicionarTarefa = (novaTarefa) => {
        setTarefas([...tarefas, novaTarefa]);
    };

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    };

    const TarefaConcluida = (id) => {
        setTarefas(tarefas.map(tarefa =>
            tarefa.id === id
                ? { ...tarefa, concluida: !tarefa.concluida }
                : tarefa
        ));
    };


    return (
        <div className="app-container">
            <div className="form-fixa">
                <Forms tarefaEnviada={adicionarTarefa} />
            </div>
            <div className="lista-container">
                <TaskList
                    tarefas={tarefas}
                    removerTarefa={removerTarefa}
                    TarefaConcluida={TarefaConcluida}
                />
            </div>
        </div>
    );
};

export default App;

import React, { useState } from 'react';
import FilterBar from './FilterBar/FilterBar';
import TaskItem from './TaskItem';
import "./TaskList.css";

const TaskList = ({ tarefas = [], removerTarefa, TarefaConcluida }) => {
    const [filtro, setFiltro] = useState('todos');
    const [pesquisa, setPesquisa] = useState('');

    const handleFiltroChange = (novoFiltro) => {
        setFiltro(novoFiltro);
    };

    const handlePesquisaChange = (termoPesquisa) => {
        setPesquisa(termoPesquisa.toLowerCase());
    };

    const tarefasFiltradas = tarefas.filter(tarefa => {
        const tarefaNome = (tarefa.tarefa || '').toLowerCase();

        if (filtro === 'completo' && !tarefa.concluida) return false;
        if (filtro === 'pendente' && tarefa.concluida) return false;
        if (pesquisa && !tarefaNome.includes(pesquisa)) return false;

        return true;
    });

    return (
        <div>
            <FilterBar mudarFiltro={handleFiltroChange} mudarPesquisa={handlePesquisaChange} />
            {tarefasFiltradas.length > 0 ? (
                tarefasFiltradas.map(tarefa => (
                    <TaskItem
                        key={tarefa.id}
                        tarefa={tarefa}
                        removerTarefa={removerTarefa}
                        TarefaConcluida={TarefaConcluida}
                    />
                ))
            ) : (
                <p>Nenhuma tarefa encontrada.</p>
            )}
        </div>
    );
};

export default TaskList;

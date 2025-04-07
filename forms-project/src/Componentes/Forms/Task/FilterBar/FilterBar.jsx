import React, { useState } from 'react';
import './FilterBar.css'

const FilterBar = ({ mudarFiltro, mudarPesquisa }) => {
    const [search, setSearch] = useState('');

    const alterarPesquisa = (e) => {
        const value = e.target.value;
        setSearch(value);
        mudarPesquisa(value);
    };

    return (
        <div className="filter-bar">
            <input
                type="text"
                placeholder="Buscar tarefa..."
                value={search}
                onChange={alterarPesquisa}
            />
            <button onClick={() => mudarFiltro('todos')} className="filter-button">Todas</button>
            <button onClick={() => mudarFiltro('completo')} className="filter-button">Concluídas</button>
            <button onClick={() => mudarFiltro('pendente')} className="filter-button">Pendentes</button>
        </div>
    );
};

export default FilterBar;

import React, { useState } from "react";
import Input from "./Input/InputChato";
import Button from "./Button/Button";
import "./Forms.css"

const Forms = (props) => {

    const [tarefa, setTarefa] = useState('');

    const aAlterarTarefa = (novaTarefa) => setTarefa(novaTarefa);

    const enviarTarefa = (evento) => {
        evento.preventDefault();
        props.tarefaEnviada({
            id: Date.now(),
            tarefa: tarefa,
            concluida: false
        })
    }

    return (
        <section>
            <form onSubmit={enviarTarefa} className="form-container">

                <Input
                    label="Tarefa: "
                    placeholder="Digite suas tarefas"
                    alterarTarefa={aAlterarTarefa}
                    valor={tarefa}
                />
                <Button />
            </form>
        </section>
    )
}

export default Forms;
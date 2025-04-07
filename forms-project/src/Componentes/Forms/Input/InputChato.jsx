import React from "react";
import "./input.css"

const Input = ({ label, placeholder, valor, alterarTarefa }) => {

    const digitar = (evento) => {
        alterarTarefa(evento.target.value);
    };

    return (
        <div className="input">
            <label>{label}</label>
            <input
                placeholder={placeholder}
                onChange={digitar}
                value={valor}
            />
        </div>
    );
};

export default Input;
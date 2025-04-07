import React from "react";

const Button = ({ onClick, type = "submit" }) => {
    return (
        <button type={type} className="button" onClick={onClick}>
            {"Enviar"}
        </button>
    );
};

export default Button;
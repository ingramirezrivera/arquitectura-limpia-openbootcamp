import React from 'react';
import './Button.css';

const Button = ({color = 'blue'}) => {
    return (
        <div>
            <button className={`btn ${color}`}>
                Botón           
            </button>
            
        </div>
    );
}

export default Button;

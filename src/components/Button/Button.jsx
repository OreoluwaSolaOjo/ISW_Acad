import React from 'react';
import './Button.css';

// Add onclick=onClick() into props when ready
const Button = ({ styleClass, value}) => {
    return (  
    <button className={`${styleClass}`} >
        {value}
    </button>
    );
}
 
export default Button;
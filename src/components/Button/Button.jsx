import React from 'react';
import './Button.css';

// Add onclick=onClick() into props when ready
const Button = ({ styleClass, value, onClick}) => {
    return (  
    <button className={`${styleClass}` } onClick={onClick} >
        {value}
    </button>
    );
}
 
export default Button;
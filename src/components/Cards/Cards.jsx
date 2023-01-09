import React from 'react';
import './Cards.css';
import { Slide } from "react-awesome-reveal";



const Cards = ({ cardClass, mainText, image, heading}) => {
    return (  
        
    <div className={`${cardClass}`} >
  <Slide direction>
        <div className='cardone-imagediv'>
            <img src={image} alt={`${image}`} />
        </div>
        </Slide>
        <div className='cardone-heading'>
            <h3>{heading}</h3>
        </div>
        <div className='cardone-maintext'>
            <p>{mainText}</p>
        </div>
        <div className="cardone-secondimage">
            {/* <img src={imagetwo} alt={`${imagetwo}`} /> */}
        </div>
    
    </div>

    );
}
 
export default Cards;
const CardsTwo = ({ cardClass, mainText, image, heading,imagetwo}) => {
    return ( 
        
    <div className={`${cardClass}`} >
        <div className='cardtwo-imagediv'>
            <img src={image} alt={`${image}`} />
        </div>
        <div className='cardtwo-heading'>
            <h3>{heading}</h3>
        </div>
        <div className='cardtwo-maintext'>
            <p>{mainText}</p>
        </div>
        <div className="cardtwo-secondimage" style={{backgroundImage: `url(${imagetwo})`, backgroundSize: 'cover'}}>
            {/* <img src={imagetwo} alt={`${imagetwo}`} /> */}
        </div>
    </div>
     );
}
 
export default CardsTwo;
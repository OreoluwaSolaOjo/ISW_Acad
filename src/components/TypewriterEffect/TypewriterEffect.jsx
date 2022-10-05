import Typewriter from 'typewriter-effect';
import './Typewriter.css'
const TypewriterEffect= () => {
    return ( <>
    
    <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('<h1 margin="0px"> Become <span color="#2195EC"> Adept in Devops, Software </span> </h1> ')
    .typeString('<h1 margin="0px"><span color="#2195EC">Engineering or Quality Assurance, </span>with 0-</h1>')
    .typeString('<h1 margin="0px">3 years experience</h1>')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .start();
  }}
/>
    </> );
}
 
export default TypewriterEffect;

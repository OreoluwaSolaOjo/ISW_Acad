import React from 'react';
import './Navbar.css';
import ISWAcademyLogo from '../../assets/InterswitchAcademyLogo.png';
import Button from '../Button/Button';
import rocket from '../../assets/rocket.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
<div className='navbar-container'>
        <div className='image-div'>
        <img src={ISWAcademyLogo} alt="Interswitch Academy" />
    </div>
    <div className='links'>
        <div><h3>
    Home
        </h3></div>
    <div><h3>About Us</h3></div>
    <div><h3>
    FAQs
        </h3></div>
    
</div>

   {/* <Button styleClass='blue-button' value='Apply Now'  /> */}
   <Link to="/registeration">
                      
                 
   <div className='applynow-div'>
  <button>
    Apply Now
  </button>
  <div id='rocket-div'>
    <img src={rocket} alt="" />
  </div>
  </div>
  </Link>
    
        </div>
     );
}
 
export default Navbar;
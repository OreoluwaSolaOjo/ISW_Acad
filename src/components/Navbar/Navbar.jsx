import React from 'react';
import './Navbar.css';
import ISWAcademyLogo from '../../assets/InterswitchAcademyLogo.png';
import Button from '../Button/Button';
import rocket from '../../assets/rocket.png';
import { Link } from 'react-router-dom';
import menu from "../../assets/menu.png"
import x from "../../assets/x.png";

const Navbar = () => {

const [menuClicked, setMenuClicked] = React.useState(false)
const toggleMenuClicked = () => {
  setMenuClicked(!menuClicked)
  console.log(menuClicked)
}
    return ( 
<div className='navbar-container'>
{/* { menuClicked ? <div className='menu-image' onClick={toggleMenuClicked}><img src={x} alt="" /></div>
:
<div className='menu-image' onClick={toggleMenuClicked}><img src={menu} alt="" /></div>
} */}

<div className='menu-image' ><img src={menu} alt="" /></div>
        <div className='image-div'>
        <img src={ISWAcademyLogo} alt="Interswitch Academy" />
    </div>
    {/* <div className='links' style={{ display: menuClicked ? "flex" : "none"}}> */}
    <div className='links' >
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
                      
   {/* <div className='applynow-div' style={{ display: menuClicked ? "flex" : "none"}}>           */}
   <div className='applynow-div' >
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
import React, { useState } from 'react';
import './Navbar.css';
import ISWAcademyLogo from '../../assets/InterswitchAcademyLogo.png';
import Button from '../Button/Button';
import rocket from '../../assets/rocket.png';
import { Link } from 'react-router-dom';
import menu from "../../assets/menu.png";
import x from "../../assets/x.png";




const Navbar = () => {
  const [mNavBtn, setMNavBtn] = useState(false)

  const toggle = () => setMNavBtn(!mNavBtn)

 
  return (
    <div className='navbar-container'>
      {
        mNavBtn ? <div onClick={toggle} className='menu-image mobile' ><img src={x} alt="" /></div> :
         <div onClick={toggle} className='menu-image mobile' ><img src={menu} alt="" /></div> 
          
      }

      <div className='image-div'>
        <img src={ISWAcademyLogo} alt="Interswitch Academy" />
      </div>

      {
        mNavBtn &&
        <>
          <div className='links mobile' >
            <div><h3>
              Home
            </h3></div>
            <div href="#faq"><h3>About Us</h3></div>
            <div><h3>
              FAQs
            </h3></div>

          </div>
          <Link to="/registeration">
            <div className='applynow-div mobile'  >
              <button>
                Apply Now
              </button>
              <div id='rocket-div'>
                <img src={rocket} alt="" />
              </div>
            </div>
          </Link>
        </>
      }
               <div className='desktop-links desktop' >
            <div><h3>
              Home
            </h3></div>
            <div href="#faq"><h3>About Us</h3></div>
            <div><h3>
              FAQs
            </h3></div>

          </div>
          <Link to="/registeration">
            <div className='desktop-applynow-div desktop' >
              <button>
                Apply Now
              </button>
              <div id='desktop-rocket-div'>
                <img src={rocket} alt="" />
              </div>
            </div>
          </Link>
    </div>
  );
}

export default Navbar;
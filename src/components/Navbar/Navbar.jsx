import React, { useState } from 'react';
import './Navbar.css';
import ISWAcademyLogo from '../../assets/InterswitchAcademyLogo.png';
import Button from '../Button/Button';
import rocket from '../../assets/rocket.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import menu from "../../assets/menu.png";
import x from "../../assets/x.png";
import { useContext } from 'react';
import { theUser, UserAuthContext } from '../../context/UserAuthContext';
import { useLocalStorage } from '../CustomHooks/useLocalStorage';




const Navbar = () => {
  const [mNavBtn, setMNavBtn] = useState(false)
  const navigate = useNavigate()
  const { val, setVal } = useContext(UserAuthContext)
  const toggle = () => setMNavBtn(!mNavBtn)

 const sesh = JSON.parse(localStorage.getItem("loginval"))
  const handleLogout = () => {
    navigate('/')
    setVal(theUser)
    localStorage.removeItem("loginval")
    sessionStorage.removeItem("context")
  }
  const handleDashboard = () => {
    navigate(`auth/dashboard/${sesh.id}`)
    setVal(theUser)
  }
  return (<>
  
    <div className={mNavBtn ? 'navbar-container navbar-container-height' : 'navbar-container'}>
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

            <div><h3>
              Login
            </h3></div>
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
          </div>

        </>
      }
      <div className='desktop-links desktop' >
        <Link to="/">
          <div><h3>
            Home
          </h3></div>
        </Link>

        {sesh?.isAuthenticated ?<>
          <div onClick={handleLogout}><h3>
            Logout
          </h3></div>
        
          
            <div onClick={handleDashboard}><h3>
              Dashboard
            </h3></div>
          
        </> : <><Link to="/login">
          <div><h3>
            Login
          </h3></div>
        </Link>
          <Link to="/registeration">
            <div className='desktop-applynow-div desktop' >
              <button>
                Apply Now
              </button>
              <div id='desktop-rocket-div'>
                <img src={rocket} alt="" />
              </div>
            </div>
          </Link> </>
        }

      </div>

    </div> 

    </>
  );
}

export default Navbar;
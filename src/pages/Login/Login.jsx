import { useState } from "react";
import InterswitchAcademyLogo from "../../assets/InterswitchAcademyLogo.png"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./Login.css"

const Login = () => {
  
    return (
        <div className="registeration-div">
          <img src={InterswitchAcademyLogo} alt="" />
            <form>
            
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Email:</label>
                <input
                    type="text"
                 
                    required
                
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Password:</label>
                <input
                    type="password"
                
                    required
                   
                />

                <Button value='Login' styleClass='blue-button'></Button>
                <p>Don't have an account?
                    <Link to="/registeration">
                        Click here to Register
                    </Link>
                </p>

            </form>
        </div>
    );
}

export default Login;
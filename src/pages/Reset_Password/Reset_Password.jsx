import { useState } from "react";
import InterswitchAcademyLogo from "../../assets/InterswitchAcademyLogo.png"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./Reset_Password.css"

const Reset_Password = () => {
  
    return (
        <div className="registeration-div">
          <img src={InterswitchAcademyLogo} alt="" />
            <form>
            <p>Enter your email address and we will send you an email to reseet your password</p>
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Email:</label>
                <input
                    type="text"
             
                    required
                
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
             

                <Button value='Reset_Password' styleClass='blue-button'></Button>
                <p>
                    <Link to="/login">
                        Click here to Sign in
                    </Link>
                </p>

            </form>
        </div>
    );
}

export default Reset_Password;
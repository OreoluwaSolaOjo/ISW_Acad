import { useState } from "react";
import successful from "../../assets/successful.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Reset_Password.css"

const Reset_Password_Success = () => {
  
    return (
        <div className="reset_password_success">
            <h2>Password Reset Success</h2>
            <div className="reset_password_success_imagediv">
            <img src={successful} alt="" />
            </div>
        
          
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
             

               <div>
               <p>   Click here
                    <Link to="/login">
                      to Sign in
                    </Link>
                </p>
               </div>
               

     
        </div>
    );
}

export default Reset_Password_Success;
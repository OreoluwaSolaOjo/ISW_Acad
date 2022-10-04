import { useState } from "react";
import InterswitchAcademyLogo from "../../assets/InterswitchAcademyLogo.png"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import "./Login.css"

const Login = () => {
    const { login, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
        <div className="registeration-div">
          <img src={InterswitchAcademyLogo} alt="" />
            <form  submit={handleSubmit(onSubmit)}>
            
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Email:</label>
                <input
                    type="text"
                    {...login("email", {required: "Please fill in your email",
                    minLength: {
                  
                }
                })}
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Password:</label>
                <input
                    type="password"

                   
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
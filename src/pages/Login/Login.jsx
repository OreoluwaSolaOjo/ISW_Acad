import { useState } from "react";
import InterswitchAcademyLogo from "../../assets/InterswitchAcademyLogo.png"
import { json, Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import "./Login.css";
import InterswitchAcademyLogoAnimation from "../../assets/InterswitchAcademyLogoAnimation.mp4";
import { BallTriangle } from "react-loader-spinner";
import { useContext } from "react";
import { UserAuthContext } from "../../context/UserAuthContext";
import { useEffect } from "react";
import useStateContext, { getFreshContext } from "../../context/useStateContext";


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const { val, setVal } = useContext(UserAuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const url = "https://localhost:7051/api/v1/auth/login"
    
    const [apierrors, setApiErrors] = useState("")
    async function onSubmit(data, e) {
        sessionStorage.removeItem('context')

        console.log(data)
        setLoading(true)
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            // Adding body or contents to send
            body: JSON.stringify(data),

        }).then(response => response.json())
            .then(json => {
                console.log(json)
                setVal(json)
                localStorage.setItem('loginval', JSON.stringify(json))
                setLoading(false)
                if (json.responseMessage == "Invalid Credentials") {
                    setApiErrors(json.responseMessage)
                } else {

                    navigate(`/`)
                    console.log(val)
                }
            })
    }
    return (<>

        {loading ?
            <div className="videoClass">


                <video type="video/mp4" src={InterswitchAcademyLogoAnimation} loop muted autoPlay={"autoplay"} />

            </div>
            :
            <div className="registeration-div">
                <img src={InterswitchAcademyLogo} alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>

                    {apierrors && <p style={{ color: 'red' }}>{apierrors}, Please fill in your Email and Password correctly!!!</p>}
                    <label>Email:</label>
                    <input
                        placeholder="Please fill in your Email"
                        type="text"
                        {...register("Email", {
                            required: "Please fill in your email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            }

                        })}
                    />
                    <p className="errors">{errors.Email?.message}</p>
                    {/* {errors.Email && <p className="errors">Invalid Email</p>} */}
                    <label>Password:</label>
                    <input
                     placeholder="Please fill in your Password"
                        type="password"
                      
                        {...register("Password", {

                            required: "Please fill in your password",
                            minLength: {
                                value: 8,
                                message: "The minimum first name length is 8"
                            }
                        })}

                    />
      <p className="errors">{errors.Password?.message}</p>
                    <Button value='Login' styleClass='blue-button'></Button>
                    <p>Don't have an account?
                        <Link to="/registeration">
                            Click here to Register
                        </Link>
                    </p>

                </form>
            </div>}
    </>
    );
}

export default Login;
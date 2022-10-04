import { useState } from "react";
import InterswitchAcademyLogo from "../../assets/InterswitchAcademyLogo.png"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import "./Registeration.css"

const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
        <div className="registeration-div">
          <img src={InterswitchAcademyLogo} alt="" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name:</label>
                <input
                    type="text"
                    {...register("firstName", {required: "Please fill in your first name",
                    minLength: {
                    value: 4,
                    message: "The minimum first name length is 4" 
                }
                })}
                   
                />
                <p className="errors">{errors.firstName?.message}</p>
                <label>Last Name:</label>
                <input
                    type="text"
                    {...register("lastName",{required: "Please fill in your Last name",
                    minLength: {
                    value: 4,
                    message: "The minimum first name length is 4" 
                }
                })}
                
                  
                />
               <p className="errors">{errors.lastName?.message}</p>
                <label for="gender" >Gender</label>
  <select name="gender" id="gender" {...register("gender" , {required: "This is required"})}>
      <option value="male">Male</option>
      <option value="female">Female</option>

  </select>
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Email:</label>
                <input
                    type="text"
                    {...register("email" , {required: "Please fill in your Email",
                    minLength: {
                    value: 4,
                    message: "The minimum first name length is 4" 
                }
                }
                )}
                  
                
                />
                <p className="errors">{errors.email?.message}</p>
                
                <label>Password:</label>
                <input
                    type="password"
                    {...register("password" , {required: "Please fill in your Password",
                    minLength: {
                    value: 4,
                    message: "The minimum first name length is 8" 
                }
                })}
                 
                   
                />

<label for="training_track">Choose a training track:</label>
  <select name="training_track" id="training_track" {...register("training_track")}>
      <option value="softwareengineering">Software Engineering</option>
      <option value="devops">Devops</option>
      <option value="qualityassurance">Quality Assurance</option>
  </select>
  <label for="class_of_degree">Class of degree:</label>
  <select name="class_of_degree" id="class_of_degree" {...register("class_of_degree")}>
      <option value="first_class">First Class</option>
      <option value="second_class_upper">Second Class Upper</option>
      <option value="second_class_lower">Second Class Lower</option>
      <option value="others">Others</option>
  </select>
  <div className="checkbox">
  <label for="nysc"> I have completed NYSC</label>
  <input type="checkbox" id="nysc" name="nysc" value="nysc" {...register("nysc")}/>
  </div>
<div className="checkbox">
<label for="experience"> I have 0-3years experience in my chosen field</label>
  <input type="checkbox" id="experience" name="experience" value="experience" {...register("experience")}/>
</div>
                <Button value='Register' styleClass='blue-button' type="submit"></Button>
                <p>Already have an account?
                    <Link to="/login">
                        Click here to Login
                    </Link>
                </p>

            </form>
        </div>
    );
}

export default Registration;
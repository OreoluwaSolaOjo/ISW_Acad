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
                    {...register("firstName")}
                    required
                />
                {/* {errors.title && <p style={{ color: 'red' }}>Please check your First Name</p>} */}
                <label>Last Name:</label>
                <input
                    type="text"
                    {...register("lastName")}
                    required
                  
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your Surname</p>} */}
                <label for="gender" {...register("gender")}>Gender</label>
  <select name="gender" id="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>

  </select>
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Email:</label>
                <input
                    type="text"
                    {...register("email")}
                    required
                
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Password:</label>
                <input
                    type="password"
                    {...register("password")}
                    required
                   
                />

<label for="training_track">Choose a training track:</label>
  <select name="training_track" id="training_track" {...register("training_track")}>
      <option value="volvo">Software Engineering</option>
      <option value="saab">Devops</option>
      <option value="saab">Quality Assurance</option>
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
<label for="vehicle2"> I have 0-3years experience in my chosen field</label>
  <input type="checkbox" id="experience" name="experience" value="experience" {...register("experience")}/>
</div>

 

  
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                {/* <label>Bio:</label>
                <textarea
                    type="text"
                    rows="7"
                    cols="40"
                  
                    required
                 
                /> */}
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your bio</p>} */}

                {/* {!isPending && <button >Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>} */}
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
import React, { useState } from "react";
import profilepic from "../../assets/test1.jpg";
import "./Dashboard.css";
import examination from "../../assets/exam.png";
import profile from "../../assets/profile.png";
import dashboard from "../../assets/dashboard.png";
import results from "../../assets/results.png";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import InterswitchAcademyLogo from "../../assets/InterswitchAcademyLogo.png";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/examination')
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const displayYes = "flex";
    const displayNo = "none"
    const [currentDisplayOne, setcurrentDisplayOne] = useState(displayYes)
    const [currentDisplayTwo, setcurrentDisplayTwo] = useState(displayNo)
    const [currentDisplayThree, setcurrentDisplayThree] = useState(displayNo)
    const [currentDisplayFour, setcurrentDisplayFour] = useState(displayNo)
    return ( 
        <div className="dashboardcontainer">
            <div className="dashboardsidebar">
<div className="profilepic-div">
    
    <img src={profilepic} alt=""  className="image-profilepic"/>
       
</div>
<div className="container-dashboardsidebarcontent">
<div className="dashboardsidebarcontent" onClick={() =>  {
    setcurrentDisplayTwo(displayNo)
    setcurrentDisplayThree(displayNo)
    setcurrentDisplayOne(displayYes)
    setcurrentDisplayFour(displayNo)
    }}>
    <img src={dashboard} alt="" />
<h3>Dashboard</h3>
</div>
<div className="dashboardsidebarcontent" onClick={() =>  {
    setcurrentDisplayTwo(displayYes)
    setcurrentDisplayThree(displayNo)
    setcurrentDisplayOne(displayNo)
    setcurrentDisplayFour(displayNo)
    }}>
<img src={profile} alt="" /><h3>User Profile</h3> 
</div>
<div className="dashboardsidebarcontent" onClick={() =>  {
    setcurrentDisplayTwo(displayNo)
    setcurrentDisplayThree(displayYes)
    setcurrentDisplayOne(displayNo)
    setcurrentDisplayFour(displayNo)
    }}>
   <img src={examination} alt="" /><h3>  Examinations </h3> 
</div>
<div className="dashboardsidebarcontent" onClick={() =>  {
    setcurrentDisplayTwo(displayNo)
    setcurrentDisplayThree(displayNo)
    setcurrentDisplayOne(displayNo)
    setcurrentDisplayFour(displayYes)
    }}>
<img src={results} alt="" /> <h3>Results</h3>   
</div>
</div>
</div>
<div className="dashboardrightbar" style={{ display: currentDisplayOne}}>
<div className="dashboardrightbar-section1" >
    <h3>Dashboard</h3>
    {/* <img src={InterswitchAcademyLogo} alt="" /> */}
</div>
<div className="dashboardrightbar-section2">
    <div className="pendingexaminations">
    <h3>Pending Examinations</h3>
    <div className="pendingexaminations-box">

    </div>
    <div className="notifications">
        <h3>Notifications</h3>
        <div className="notifications-box">

        </div>
        <div className="notifications-box">
            
        </div>
        <div className="notifications-box">
            
        </div>
    </div>
    </div>
   
    
</div>
            </div>
{/* User Profile */}
<div className="dashboardrightbar" style={{ display: currentDisplayTwo}}>
<div className="dashboardrightbar-section1" >
    <h3>User Profile</h3>
</div>
<div className="dashboardrightbar-section2">
    <div className="pendingexaminations">
    <h3>Edit Profile</h3>
    <div className="editprofile-box">
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
                
            
<label>Training Track:</label>
                <input
                    type="training_track"
                    {...register("training_track" , {required: "Please fill in your Password",
                    minLength: {
                    value: 4,
                    message: "The minimum first name length is 8" 
                }
                })}
                 
                   
                />
  
  <div className="Button-div-update-profile">
  <Button value='Update Profile' styleClass='no-border-button' type="submit"></Button>
  </div>
                
            

            </form>
    </div>
  
    </div>
   
    
</div>
            </div>
{/* Examinations */}
<div className="dashboardrightbar" style={{ display: currentDisplayThree}}>
<div className="dashboardrightbar-section1" >
    <h3>Examinations</h3>
</div>
<div className="dashboardrightbar-section2">
    <div className="pendingexaminations">
    <h3>Pending Examinations</h3>
    <div className="examinationstab">
<h4>You have a pending examination</h4>

<Button styleClass="blue-button" value="Take Now" onClick={handleClick}/>


    </div>
    
    </div>
   
    
</div>
            </div>
{/* Results */}
<div className="dashboardrightbar" style={{ display: currentDisplayFour}}>
<div className="dashboardrightbar-section1" >
    <h3>Results</h3>
</div>
<div className="dashboardrightbar-section2">
    <div className="pendingexaminations">
    <h3>Examination Results</h3>
    <div className="pendingexaminations-box">
<div><h4>You have no results yet</h4>
    </div>
    </div>
   
    </div>
   
    
</div>
            </div>
        </div>
     );
}
 
export default Dashboard;
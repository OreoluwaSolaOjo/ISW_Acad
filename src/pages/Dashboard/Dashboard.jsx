import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import profilepic from "../../assets/test1.jpg";
import "./Dashboard.css";
import examination from "../../assets/exam.png";
import profile from "../../assets/profile.png";
import dashboard from "../../assets/dashboard.png";
import results from "../../assets/results.png";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import InterswitchAcademyLogo from "../../assets/InterswitchAcademyLogo.png";
import signOut from "../../assets/sign-out.png";
import home from "../../assets/home.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { GetUserContext } from "../../context/getUsercontext";
import active from "../../assets/active.png"
import { theUser } from "../../context/UserAuthContext";
import { Alert, Avatar, Box, Collapse, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "../../components/PDFFile/PDFFile";
import useStateContext from "../../context/useStateContext";

const Dashboard = () => {
   
    const navigate = useNavigate()
    const userLoggedIn = JSON.parse(localStorage.getItem("loginval"));
  
    const { user, setUser } = useContext(GetUserContext)
    const [userErr, setUserErr] = useState(null);
    const { id } = useParams();
    const urlone = `https://localhost:7051/api/v1/users/get-user/${id}`
    const urltwo = `https://localhost:7051/api/v1/users/update-user/${id}`
    // const urltwo = `https://localhost:7051/api/v1/users/get-user/${id}`
 
    const fetchData = async () => {
        try {
            const response = await axios.get(urlone)
            console.log(response)
            if(userLoggedIn.id != response.data.user.id){
                localStorage.removeItem("loginval")
                navigate("/login")
            }
            setUser(response.data.user)
        } catch (error) {
            console.log(error.message)
            setUserErr(error.message)
            navigate("/login")
        }
    }

    useEffect(() => {
        fetchData();
        // console.log(user)
    },[id])
    
   
    const handleClick = () => {
        navigate(`/auth/examination/${user.trainingTrackId}`)
    
    }
    const handleLogout = () => {
        sessionStorage.removeItem('context');
        localStorage.removeItem('loginval');
        setUser(theUser)
        navigate('/')
    }
   
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm();
    const handleUpdateProfile = async () => {
        try {
            const response = await axios.post(urltwo, {
                firstName: getValues('firstName'),
                lastName: getValues('lastName'),
                gender: user.gender,
                email: getValues('email'),
                trainingTrackId: user.trainingTrackId,
                score: user.score,
                timeTaken: user.timeTaken,
                hasTakenExam: user.hasTakenExam,
                degree: user.degree,
                isCompletedNysc: user.isCompletedNysc,
                isExperienced: user.isExperienced,
            })
            console.log(response)
            setOpen(true)
        } catch (error) {
            setUserErr(error)
            console.log(userErr)
        }
    }

    const onSubmit = data => console.log(data);
    const displayYes = "flex";
    const displayNo = "none"
    const [currentDisplayOne, setcurrentDisplayOne] = useState(displayYes)
    const [currentDisplayTwo, setcurrentDisplayTwo] = useState(displayNo)
    const [currentDisplayThree, setcurrentDisplayThree] = useState(displayNo)
    const [currentDisplayFour, setcurrentDisplayFour] = useState(displayNo)
    const [currentDisplayFive, setcurrentDisplayFive] = useState(displayNo)
    return (
        <>
            {Object.entries(user).length > 0 ?
                <div className="dashboardcontainer">
                    <div className="dashboardsidebar">
                        <div className="profilepic-div">
                            <Avatar sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}   >{user.firstName.charAt(0)}{user.lastName.charAt(0)}</Avatar>
                            {/* <img src={profilepic} alt="" className="image-profilepic" /> */}

                        </div>
                        <div className="container-dashboardsidebarcontent">
                            <div className="dashboardsidebarcontent" onClick={() => {
                                setcurrentDisplayTwo(displayNo)
                                setcurrentDisplayThree(displayNo)
                                setcurrentDisplayOne(displayYes)
                                setcurrentDisplayFour(displayNo)
                                setcurrentDisplayFive(displayNo)
                            }}>
                                <img src={dashboard} alt="" />
                                <h3>  Dashboard</h3>
                            </div>
                            <div className="dashboardsidebarcontent" onClick={() => {
                                setcurrentDisplayTwo(displayYes)
                                setcurrentDisplayThree(displayNo)
                                setcurrentDisplayOne(displayNo)
                                setcurrentDisplayFour(displayNo)
                                setcurrentDisplayFive(displayNo)
                            }}>
                                <img src={profile} alt="" /><h3>User Profile</h3>
                            </div>
                            {user.hasTakenExam ? null :
                                <div className="dashboardsidebarcontent" onClick={() => {
                                    setcurrentDisplayTwo(displayNo)
                                    setcurrentDisplayThree(displayYes)
                                    setcurrentDisplayOne(displayNo)
                                    setcurrentDisplayFour(displayNo)
                                    setcurrentDisplayFive(displayNo)
                                }}>
                                    <img src={examination} alt="" /><h3>  Examinations </h3>
                                </div>}
                            <div className="dashboardsidebarcontent" onClick={() => {
                                setcurrentDisplayTwo(displayNo)
                                setcurrentDisplayThree(displayNo)
                                setcurrentDisplayOne(displayNo)
                                setcurrentDisplayFour(displayYes)
                                setcurrentDisplayFive(displayNo)
                            }}>
                                <img src={results} alt="" /> <h3>Results</h3>
                            </div>
                            {user.hasTakenExam && user.score >= 70 ? <div className="dashboardsidebarcontent" onClick={() => {
                                setcurrentDisplayTwo(displayNo)
                                setcurrentDisplayThree(displayNo)
                                setcurrentDisplayOne(displayNo)
                                setcurrentDisplayFour(displayNo)
                                setcurrentDisplayFive(displayYes)
                            }}>
                                <img src={results} alt="" /> <h3>Offer Letter</h3>
                            </div>
                                : null}
                        </div>
                        <div className="dashboardsidebarcontent-lastdiv" onClick={handleLogout}>
                            <div >
                                <img src={signOut} alt="" /> <h5>Logout</h5>
                            </div>
                            {/* <div onClick={handleHome}>
                                <img src={home} alt="" /> <h5>Home</h5>
                            </div> */}

                        </div>
                    </div>
                    {/* { userErr != null ? userErr: user == " "?  "loading..." :
                        user.firstName
                        } */}

                    <div className="dashboardrightbar" style={{ display: currentDisplayOne }}>
                        <div className="dashboardrightbar-section1" >
                            <div>
                                <h3> {user.lastName}'s Dashboard</h3>
                            </div>
                            <div>
                                <img src={InterswitchAcademyLogo} alt="" /></div>
                        </div>
                        <div className="dashboardrightbar-section2">
                            <div className="pendingexaminations">

                                {/* <div className="pendingexaminations-box">
                                <h3>Hi {user.firstName}, {user.lastName}</h3>
                                </div> */}
                                <div className="notifications">
                                    <h3>Notifications</h3>

                                    {user.trainingTracks.notifications.map((singlenotification) => {
                                        return (
                                            <div key={singlenotification.notificationId} className="notifications-box">
                                                <div className="notifications-box-leftbar"></div>
                                                <div className="notifications-box-content">
                                                    <h3>{singlenotification.notificationContent}</h3>
                                                </div>
                                                <div className="notifications-box-rightbar"><img src={active} alt="" /></div>
                                            </div>)
                                    })}

                                </div>
                            </div>


                        </div>
                    </div>
                    {/* User Profile */}
                    <div className="dashboardrightbar" style={{ display: currentDisplayTwo }}>
                        <div className="dashboardrightbar-section1" >
                            <h3>{user.firstName}'s User Profile</h3>
                            <div>
                                <img src={InterswitchAcademyLogo} alt="" /></div>
                        </div>
                        <div className="dashboardrightbar-section2">
                            <div className="pendingexaminations">
                                <h3>Edit Profile</h3>
                                <Box sx={{ width: '100%' }}>
                                    <Collapse in={open}>
                                        <Alert
                                            action={
                                                <IconButton
                                                    aria-label="close"
                                                    color="inherit"
                                                    size="small"
                                                    onClick={() => {
                                                        setOpen(false);
                                                    }}
                                                >
                                                    <CloseIcon fontSize="inherit" />
                                                </IconButton>
                                            }
                                            sx={{ mb: 2 }}
                                        >
                                            Profile Update Successful!
                                        </Alert>
                                    </Collapse>

                                </Box>
                                <div className="editprofile-box">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label>First Name:</label>
                                        <input
                                            type="text"
                                            placeholder={user.firstName}
                                            {...register("firstName", {
                                                required: "Please fill in your first name",
                                                minLength: {
                                                    value: 4,
                                                    message: "The minimum first name length is 4"
                                                }
                                            })}

                                        />
                                        <p className="errors">{errors.firstName?.message}</p>
                                        <label>Last Name:</label>
                                        <input
                                            placeholder={user.firstName}
                                            type="text"
                                            {...register("lastName", {
                                                required: "Please fill in your Last name",
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
                                            placeholder={user.email}
                                            {...register("email", {
                                                required: "Please fill in your Email",
                                                minLength: {
                                                    value: 4,
                                                    message: "The minimum first name length is 4"
                                                }
                                            }
                                            )}


                                        />
                                        <p className="errors">{errors.email?.message}</p>




                                        <div className="Button-div-update-profile">
                                            <Button value='Update Profile' styleClass='no-border-button' type="submit" onClick={handleUpdateProfile} ></Button>
                                        </div>



                                    </form>
                                </div>

                            </div>


                        </div>
                    </div>
                    {/* Examinations */}
                    {user.hasTakenExam ? null : <div className="dashboardrightbar" style={{ display: currentDisplayThree }}>
                        <div className="dashboardrightbar-section1" >
                            <h3> {user.firstName}'s Examinations</h3>
                            <div>
                                <img src={InterswitchAcademyLogo} alt="" /></div>
                        </div>
                        <div className="dashboardrightbar-section2">
                            <div className="pendingexaminations">
                                <h3>Pending Examinations</h3>
                                <div className="examinationstab">
                                    <h4>You have a pending examination</h4>

                                    <Button styleClass="blue-button" value="Take Now" onClick={handleClick} />


                                </div>

                            </div>


                        </div>
                    </div>}
                    {/* Results */}
                    <div className="dashboardrightbar" style={{ display: currentDisplayFour }}>
                        <div className="dashboardrightbar-section1" >
                            <h3>{user.firstName}'s Results</h3>
                            <div>
                                <img src={InterswitchAcademyLogo} alt="" /></div>
                        </div>
                        <div className="dashboardrightbar-section2">
                            <div className="pendingexaminations">
                                <h3>Examination Results</h3>
                                <div className="pendingexaminations-box">
                                    <div>  {user.hasTakenExam ? (user.score < 70 ? <h4>You scored {user.score}% in the entrance exams! You did not meet the cut off mark!</h4> : <h4>Congrats!!! You scored {user.score} and you have been giving a place in the Academy</h4>) : <h4>You have not taken the entrance exams.</h4>}
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                    {user.score >= 70 ? <div className="dashboardrightbar" style={{ display: currentDisplayFive }}>
                        <div className="dashboardrightbar-section1" >
                            <h3>{user.firstName}'s Offer Letter</h3>
                            <div>
                                <img src={InterswitchAcademyLogo} alt="" /></div>
                        </div>
                        <div className="dashboardrightbar-section2">
                            Download your offer letter here
                            <PDFDownloadLink document={<PDFFile />}>
                                {({ loading }) => (loading ? <Button styleClass="blue-button" value="Loading Document..." /> : <Button styleClass="blue-button" value="Download" />)}
                            </PDFDownloadLink>


                        </div>
                    </div> :
                        <div className="dashboardrightbar" style={{ display: currentDisplayFive }}>
                            <div className="dashboardrightbar-section1" >
                                <h3>{user.firstName}'s Results</h3>
                                <div>
                                    <img src={InterswitchAcademyLogo} alt="" /></div>
                            </div>
                            <div className="dashboardrightbar-section2">
                                You did not reach the pass mark


                            </div>
                        </div>
                    }

                </div> : null}
        </>
    );
}

export default Dashboard;
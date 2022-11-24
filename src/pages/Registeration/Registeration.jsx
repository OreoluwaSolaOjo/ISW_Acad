import { useState } from "react";
import InterswitchAcademyLogo from "../../assets/InterswitchAcademyLogo.png"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import "./Registeration.css";
import CloseIcon from '@mui/icons-material/Close';
import InterswitchAcademyLogoAnimation from "../../assets/InterswitchAcademyLogoAnimation.mp4";

import { BallTriangle } from "react-loader-spinner";
import { Alert, Box, Collapse, IconButton } from "@mui/material";

const Registration = ({ handleClickOpen }) => {
    const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm()
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // const onSubmit = (data)=> console.log(...data)
    // const[values, setValues] = useState({
    //     firstName:"",
    //     lastName:"",
    //     gender: "",
    //     email: "",
    //     password: "",
    //     training_track: "",
    //     class_of_degree: "",
    //     experience: "",

    // })
    const Gender = [
        {
            id: 1,
            value: 0,
            name: 'Male',
        },
        {
            id: 2,
            value: 1,
            name: 'Female',
        }
    ];

    const TrainingTrack = [
        {
            id: 1,
            value: 1,
            name: 'Software Engineering',
        },
        {
            id: 2,
            value: 2,
            name: 'DevOps',
        },
        {
            id: 3,
            value: 3,
            name: 'Quality Assurance',
        }
    ];

    const Degree = [
        {
            id: 1,
            value: 0,
            name: 'First Class',
        },
        {
            id: 2,
            value: 1,
            name: 'Second Class Upper',
        },
        {
            id: 3,
            value: 2,
            name: 'Second Class Lower',
        },
        {
            id: 3,
            value: 2,
            name: 'Others',
        },
    ];

    const [checked, setChecked] = useState()
    const [checkedtwo, setCheckedtwo] = useState()
    const handleCheckboxChange = (e) => {
        setChecked(e.target.checked)
    }
    const handleCheckboxChangetwo = (e) => {
        setCheckedtwo(e.target.checked)
    }
    const [apierrors, setApiErrors] = useState("")
    // baseURL
    const url = "https://localhost:7051/api/v1/auth/register"
    async function onSubmit(data, e) {
        setLoading(true)
        console.log(data)
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            // Adding body or contents to send
            body: JSON.stringify(data),

        }).then(response => response.json())
            .then(json => {
                setLoading(false)
                if (json.responseCode == "907") {
                    setApiErrors(json.responseMessage)
                } else {
                    console.log(json)
                    setOpen(true);
                   
                }
                
            })
    }


    return (
        <>

            {loading ?
                <div className="videoClass">
                    <video type="video/mp4" src={InterswitchAcademyLogoAnimation} loop muted autoPlay={"autoplay"} />
                </div> :
                <div className="registeration-div">

                    <img src={InterswitchAcademyLogo} alt="" />
                    {apierrors && <p style={{ color: 'red' }}>{apierrors}, Please fill in the form correctly!!!</p>}
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
                                Registeration Successful, Please Check your email for further action!
                            </Alert>
                        </Collapse>

                    </Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>First Name:</label>
                        <input
                            type="text"
                            {...register("FirstName", {
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
                            type="text"
                            {...register("LastName", {
                                required: "Please fill in your Last name",
                                minLength: {
                                    value: 4,
                                    message: "The minimum first name length is 4"
                                }
                            })}


                        />
                        <p className="errors">{errors.lastName?.message}</p>
                        <label  >Gender</label>

                        <select name="Gender" id="Gender"
                            {...register("Gender", {
                                required: "This is required"
                            })}>
                            {Gender.map((gen, id) => {
                                return (
                                    <option key={gen.id} value={parseInt(gen.value)}>{gen.name}</option>)
                            })}


                        </select>
                        {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                        <label>Email:</label>
                        <input
                            type="text"
                            {...register("Email", {
                                required: "Please fill in your Email",
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
                            {...register("Password", {
                                required: "Please fill in your Password",
                                minLength: {
                                    value: 4,
                                    message: "The minimum first name length is 8"
                                }
                            })}


                        />

                        <label >Choose a training track:</label>
                        <select name="TrainingTrackId" id="TrainingTrackId" {...register("TrainingTrackId")}>
                            {TrainingTrack.map((train, id) => {
                                return (
                                    <option key={id} value={parseInt(train.value)}>{train.name}</option>)
                            })}
                        </select>
                        <label>Class of degree:</label>
                        <select name="Degree" id="Degree" {...register("Degree")}>
                            {Degree.map((deg, id) => {
                                return (
                                    <option key={id} value={parseInt(deg.value)}>{deg.name}</option>)
                            })}

                        </select>
                        <div className="checkbox">
                            <label> I have completed NYSC</label>
                            <input type="checkbox" id="IsCompletedNysc" name="IsCompletedNysc " value={checked} onChange={handleCheckboxChange}  {...register("IsCompletedNysc")} />
                        </div>
                        <div className="checkbox">
                            <label> I have 03years experience in my chosen field</label>
                            <input type="checkbox" id="IsExperienced" name="IsExperienced" value={checkedtwo} onChange={handleCheckboxChangetwo}  {...register("IsExperienced")} />
                        </div>
                        <Button value='Register' styleClass='blue-button' type="submit"></Button>
                        <p>Already have an account?
                            <Link to="/login">
                                Click here to Login
                            </Link>
                        </p>

                    </form>

                </div>
            }
            {/* <Box sx={{ width: '100%' }}>
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
          Close me!
        </Alert>
      </Collapse>
   
    </Box>
   */}

        </>
    );
}

export default Registration;
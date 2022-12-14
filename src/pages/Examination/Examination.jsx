import React from "react";
import "./Examination.css";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            import ISWAcademyLogo from '../../assets/InterswitchAcademyLogo.png';                                               
import Button from "../../components/Button/Button";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { UserAuthContext } from "../../context/UserAuthContext";
import { useContext } from "react";
import useStateContext, { stateContext } from "../../context/useStateContext";
import { GetUserContext } from "../../context/getUsercontext";
import { useState } from "react";
import { getFormatedTime } from "./helper";
import AlertDialog from "../../components/Modal/Modal";

const Examination = () => {
 
  const [openmodal, setOpenModal] = useState(false);
  const navigate = useNavigate()
  const { val, setVal } = useContext(UserAuthContext)
 
  // useEffect(()=>{
  //   if (val.isAuthenticated === undefined) {
  //     navigate('/'); // or loading indicator, etc...
  //   }
  // })
  const { user, setUser } = useContext(GetUserContext)
  const { context, setContext } = useStateContext();
  const { id } = useParams();
  const urlone = `https://localhost:7051/api/v1/training-track/getTrainingTrack/${id}`
  const urltwo = `https://localhost:7051/api/QuestionsBank/get-questions-by-trainingtrack/${user.trainingTrackId}`
  const [qns, setQns] = useState([]);
  const [qnsIndex, setqnsIndex] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
 

  
  let timer;
  const startTimer = () => {
    timer = setInterval(() => {
      setTimeTaken(prev => prev + 1)
    }, [1000])
  }

  useEffect(() => {
    axios.get(urltwo)
      .then((response) => {
        console.log(response)
        setQns(response.data)
        startTimer();
      })
    // suspend timer here
    return () => {
      clearInterval(timer)
    }
  }, [])
  const handleNextQuestion = () => {
    if (qnsIndex < 9){
    setqnsIndex(qnsIndex + 1)
    // When user gets to the next question refresh the state of the radio button
   let allRadioButtons = document.querySelectorAll(`.rad-input`);
   allRadioButtons.forEach(value=> value.checked = false)
  }
    else{
    navigate('/auth/result')}
  }
  const handlePrevQuestion =()=>{
    if (qnsIndex > 0 && qnsIndex <=9){
      setqnsIndex(qnsIndex - 1)}

  }
 
  const updateAnswer = (qnsId, optionId) => {
   
    // first destructure array to change context since it is immutable
    const temp = [...context.selectedOptions]

    //   temp.push(
    //     {
    //       qnsId,
    //       selected: optionId
    //     }

    // To make sure if a candidate selects more than one option, the option
    // he selected is replaced
    const newSelectedoptions = {
      qnsId,
      selected: optionId
    }
    const index = temp.findIndex(object => object.qnsId === newSelectedoptions.qnsId)
    if (index === -1) {
      temp.push(newSelectedoptions)
    }
    else {
      temp[index] = newSelectedoptions;
    }


    // update the timetaken after completing the questions
    if (qnsIndex < 9) {
      setContext({ selectedOptions: [...temp] })
      // setqnsIndex(qnsIndex +1)
    }
    else {
      setContext({ selectedOptions: [...temp], timeTaken })
      // navigate to result component
      // navigate('/result')
    }
  }
 
  useEffect(() => {
    setOpenModal(true)
    const newVal = JSON.parse(localStorage.getItem('loginval'))
    Object.assign(context, user)
    const config = {
      headers: { Authorization: `Bearer ${newVal.token}` }
  };
    console.log(user)
    console.log(context)
    axios.get(urlone, config)
      .then((response) => {
        console.log(response)
      })
  }, [urlone])
const userLogin = localStorage.getItem("loginval")


// if(!newVal.isAuthenticated){
 
// }
const handleClose = () => {
  setOpenModal(false);
};

  const skill1 = {
    width: (qnsIndex + 1) * 100 / 10 + '%',


  }

  return (<>
  <AlertDialog  handleClose={handleClose} openmodal={openmodal}/>
  {Object.entries(user).length > 0 ?
    <div className="exam-container">
      <div className="exam-section1">
        <div className="exam-section1-logo">
          <img src={ISWAcademyLogo} alt="Interswitch Academy" />
        </div>
        <div className="exam-section1-heading">
          <h3>{user.trainingTracks.trainingTrackName}, Exam! (in progress)</h3>
        </div>

        <div className="exam-section1-progressbar">

          <p>Exam Progress</p>
          <div className="skill-bar" style={skill1} >
            <span className="skill-count1"></span>
          </div>

        </div>
    
    </div>
      {qns.length != 0 ?
        <div className="exam-container-mainbox">
          <div className="exam-container-mainbox-title">
            <h3>{'Question ' + (qnsIndex + 1) + ' of 10 '}</h3>
            <h3>{getFormatedTime(timeTaken)}</h3>

          </div>

          <p>{qns[qnsIndex].questionContent}</p>
          <div className="optionsClass">
            {qns[qnsIndex].options.map((item, index) => {
              return (

                <label key={index}  className="rad-label" onClick={() => {updateAnswer(
                  qns[qnsIndex].questionsBankId, index)
              
                }}>
                  <input type="radio" 
                  className="rad-input" name="rad" />
                  <div className="rad-design" ></div>
                  <div className="rad-text" >{item}</div>
                </label>)
            })}
          </div>
    
          <div className="exam-container-mainbox-buttons">


{/* 
            <Button styleClass='no-border-button' value='Previous' onClick={handlePrevQuestion}/> */}
            <Button styleClass='blue-button' value={ qnsIndex<9 ? 'Next' : 'Submit'} onClick={handleNextQuestion} />

          </div>
        </div> : null}
    </div> : null}
  </>);
}

export default Examination;
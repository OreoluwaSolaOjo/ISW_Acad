import React from "react";
import "./Examination.css";
import next from "../../assets/next-white.png";
import previous from "../../assets/previous-white.png";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              import ISWAcademyLogo from '../../assets/InterswitchAcademyLogo.png';                                               
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
const Examination = () => {
  const navigate = useNavigate()
  const { val, setVal } = useContext(UserAuthContext)
  const { user, setUser } = useContext(GetUserContext)
  const { context, setContext } = useStateContext();
  const { id } = useParams();
  const urlone = `https://localhost:7051/api/v1/training-track/getTrainingTrack/${id}`
  const urltwo = `https://localhost:7051/api/QuestionsBank`
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
  }, [urltwo])
  const handleNextQuestion = () => {
    if (qnsIndex < 4){
    setqnsIndex(qnsIndex + 1)}
    else{
    navigate('/result')}
  }
  const handlePrevQuestion =()=>{
    if (qnsIndex > 0 && qnsIndex <=4){
      setqnsIndex(qnsIndex - 1)}
  }
  const[isActive, setIsActive] = useState(false)
  const updateAnswer = (qnsId, optionId) => {
    setIsActive(true)
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
    if (qnsIndex < 4) {
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
    Object.assign(context, user)
    console.log(user)
    console.log(context)
    axios.get(urlone)
      .then((response) => {
        console.log(response)
      })
  }, [urlone])

  const skill1 = {
    width: (qnsIndex + 1) * 100 / 5 + '%',


  }
  return (<>
    <div className="exam-container">
      <div className="exam-section1">
        <div className="exam-section1-logo">
          <img src={ISWAcademyLogo} alt="Interswitch Academy" />
        </div>
        <div className="exam-section1-heading">
          <h3>Software Engineering Exam (in progress)</h3>
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
            <h3>{'Question ' + (qnsIndex + 1) + ' of 5 '}</h3>
            <h3>{getFormatedTime(timeTaken)}</h3>

          </div>

          <p>{qns[qnsIndex].questionContent}</p>
          <div className="optionsClass">
            {qns[qnsIndex].options.map((item, index) => {
              return (

                <label key={index}  className="rad-label" onClick={() => {updateAnswer(
                  qns[qnsIndex].questionsBankId, index)
                  
                }}>
                  {/* <input type="radio" className="rad-input" name="rad" /> */}
                  <div className="rad-design"></div>
                  <div className="rad-text">{item}</div>
                </label>)
            })}
          </div>
    
          <div className="exam-container-mainbox-buttons">



            <Button styleClass='no-border-button' value='Previous' onClick={handlePrevQuestion}/>
            <Button styleClass='blue-button' value={ qnsIndex<4 ? 'Next' : 'Submit'} onClick={handleNextQuestion} />

          </div>
        </div> : null}
    </div>
  </>);
}

export default Examination;
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ISWAcademyLogo from '../../../assets/InterswitchAcademyLogo.png';
import useStateContext from '../../../context/useStateContext';
import stats from '../../../assets/stats.png';
import '../Examination.css';
import Button from '../../../components/Button/Button';
import { getFormatedTime } from '../helper';
import { Navigate, useNavigate } from 'react-router-dom';

const Result = () => {
  const { context, setContext } = useStateContext();
  const url = 'https://localhost:7051/api/QuestionsBank/GetAnswers'
  const [score, setScore] = useState(0)
  const [qnAnswers, setQnAnswers] = useState([])

  useEffect(() => {
    
    // get the ids of the selected questions to get the selected answers
    const ids = context.selectedOptions.map(x => x.qnsId)
    axios.post(url, ids)
      .then(res => {
        console.log(res)
        // merge answers and selected options
        const qna = context.selectedOptions.map(x => ({
            ...x,
            // ...(res.data.find(y => y.qnsId == x.qnsId))
            ...(res.data.find(y => y.questionsBankId == x.qnsId))
          }))
        setQnAnswers(qna)
        calculateScores(qna)
      })
      .catch(err => console.log(err))
  }, [])

  // Function to calculate scores
  const calculateScores = qna => {
    console.log(qnAnswers)
    // use the array reduce method to calculate the scores and add to each correct answer
    let tempScore = qna.reduce((acc, curr) => {
      return curr.answer == curr.selected ? acc + 1 : acc;
    }, 0)
    let tempScorePercentage = tempScore * 10
    setScore(tempScorePercentage)
  }
  const navigate = useNavigate();
  const [userErr, setUserErr] = useState(null);
  const urlone = `https://localhost:7051/api/v1/users/update-user/${context.id}`
  const handleSubmitScores = async () => {
    try {
        const response = await axios.post(urlone, {
          firstName: context.firstName,
          lastName: context.lastName,
          gender: context.gender,
          email: context.email,
          trainingTrackId: context.trainingTrackId,
          score: score,
          timeTaken: context.timeTaken,
          hasTakenExam: true,
          degree: context.degree,
          isCompletedNysc: context.isCompletedNysc,
          isExperienced: context.isExperienced,})
          console.log(response)
      
       navigate(`/auth/dashboard/${context.id}`)
       sessionStorage.removeItem('context')
    } catch (error) {
      setUserErr(error)
      console.log(userErr)
    }}

  return (
    <div className="exam-container">
      <div className="exam-section1">
        <div className="exam-section1-logo">
          <img src={ISWAcademyLogo} alt="Interswitch Academy" />
        </div>
        <div className="exam-section1-heading">
          <h3>{context.trainingTracks.trainingTrackName}, Exam! (Completed!)</h3>
        </div>
      </div>
      <div className="exam-container-mainbox">
        <div className="exam-container-mainbox-title">
        </div>
        <p></p>
        <div className="resultsClass">
          <div>
            <img src={stats} alt="" />
          </div>
          <div><h1>
          Result : {score}%
            </h1></div>
        </div >
        <div className='resultstimeTaken'><p>
        TimeTaken:  {getFormatedTime(context.timeTaken) + 'mins'}
          </p></div>
        <div className='resultsbuttondiv'>
        {/* <Button styleClass='no-border-button' value='Homepage' /> */}
            <Button styleClass='blue-button' value='Submit'  onClick={handleSubmitScores}/>
            </div>
      </div>
    </div>
  )
}
export default Result;
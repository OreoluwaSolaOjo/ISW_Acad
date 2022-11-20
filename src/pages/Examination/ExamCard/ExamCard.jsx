import React from 'react'
import '../Examination.css;'
import Button from '../../../components/Button/Button'
function ExamCard() {
  return (
    <div className="exam-container-mainbox">
    <h3>Question 1</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat eos neque quia nostrum harum a optio dolores corporis, illum, perspiciatis ad sunt, commodi accusantium quaerat totam suscipit omnis libero eum.</p>
      <label className="rad-label">
        <input type="radio" className="rad-input" name="rad" />
        <div className="rad-design"></div>
        <div className="rad-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, officiis?</div>
      </label>
      <label className="rad-label">
        <input type="radio" className="rad-input" name="rad" />
        <div className="rad-design"></div>
        <div className="rad-text">Hi</div>
      </label>
      <label className="rad-label">
        <input type="radio" className="rad-input" name="rad" />
        <div className="rad-design"></div>
        <div className="rad-text">Lorem ipsum dolor sit amet.</div>
      </label>
      <label className="rad-label">
        <input type="radio" className="rad-input" name="rad" />
        <div className="rad-design"></div>
        <div className="rad-text">Air</div>
      </label>
    <div className="exam-container-mainbox-buttons">
        
        
        
        <Button styleClass='no-border-button' value='Previous'/>
        <Button styleClass='blue-button' value='Next'/>
        
    </div>
        </div>
  )
}

export default ExamCard
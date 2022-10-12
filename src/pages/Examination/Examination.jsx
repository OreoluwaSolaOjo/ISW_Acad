import React from "react";
import "./Examination.css";
import next from "../../assets/next-white.png";
import previous from "../../assets/previous-white.png";
import ISWAcademyLogo from '../../assets/InterswitchAcademyLogo.png';
import Button from "../../components/Button/Button";
const Examination = () => {
    return ( <>
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
        <div class="skill-bar skill1">
            <span class="skill-count1">95%</span>
        </div>
   
        </div>  
     {/* <div className="exam-section1-links">
      <div id="exam-section1-prev-button">
      
     <img src={previous} alt="" /><p>Prev </p>
        </div> 
     <div id="exam-section1-next-button">
     <p>Next</p>
        <img src={next} alt="" />
     </div>
    
        
        </div>   */}
    </div>
    <div className="exam-container-mainbox">
<h3>Question 1</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat eos neque quia nostrum harum a optio dolores corporis, illum, perspiciatis ad sunt, commodi accusantium quaerat totam suscipit omnis libero eum.</p>
   {/* <div>
   <input type="checkbox" /><p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div>
   <input type="checkbox" /><p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div>
   <input type="checkbox" /><p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div>
   <input type="checkbox" /><p>Lorem ipsum dolor sit amet.</p>
    </div> */}
  <label class="rad-label">
    <input type="radio" class="rad-input" name="rad" />
    <div class="rad-design"></div>
    <div class="rad-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, officiis?</div>
  </label>
  <label class="rad-label">
    <input type="radio" class="rad-input" name="rad" />
    <div class="rad-design"></div>
    <div class="rad-text">Hi</div>
  </label>
  <label class="rad-label">
    <input type="radio" class="rad-input" name="rad" />
    <div class="rad-design"></div>
    <div class="rad-text">Lorem ipsum dolor sit amet.</div>
  </label>
  <label class="rad-label">
    <input type="radio" class="rad-input" name="rad" />
    <div class="rad-design"></div>
    <div class="rad-text">Air</div>
  </label>
<div className="exam-container-mainbox-buttons">
    
    
    
    <Button styleClass='no-border-button' value='Previous'/>
    <Button styleClass='blue-button' value='Next'/>
    
</div>
    </div>
</div>
    </> );
}
 
export default Examination;
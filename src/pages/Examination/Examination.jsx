import React from "react";
import "./Examination.css";
import next from "../../assets/next-white.png";
import previous from "../../assets/previous-white.png";
const Examination = () => {
    return ( <>
<div className="exam-container">
    <div className="exam-section1">
        <div className="exam-section1-heading">
        <h3>Software Engineering Exam (in progress)</h3> 
        </div>
     
     <div className="exam-section1-progressbar">
        
        </div>  
     <div className="exam-section1-links">
      <div id="exam-section1-prev-button">
      
     <img src={previous} alt="" /><p>Prev </p>
        </div> 
     <div id="exam-section1-next-button">
     <p>Next</p>
        <img src={next} alt="" />
     </div>
    
        
        </div>  
    </div>
</div>
    </> );
}
 
export default Examination;
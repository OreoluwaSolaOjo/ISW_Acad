import React from "react";
import "./Registeration.css";
import arrowdown from "../../assets/arrow-down.png";

const Registeration = () => {
    return ( <>
       <div className="maindiv">
<div className="leftdiv">
    <button onclick="topFunction()">
        <img src={arrowdown} className="rotateimg180" alt="arrow-up" />
    </button>

<img src={arrowdown} alt="arrow-down" />
</div>
<div className="rightdiv">
    <div id="rightdiv-rowone">
    <h2>Welcome to Interswitch Academy!</h2>
    </div>

        <div id="rightdiv-rowtwo">
            <div id="rightdiv-rowtwo-one">
                <div>
                    <label for="cars">First Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="cars">Last Name</label>
                    <input type="text" />
                </div>
                 <div>
                    <label for="cars">Car Type</label>
                    <select name="cars" id="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                </div>
                <div>
                    <label for="cars">Class of Degree</label>
                    <select name="cars" id="class-of-degree">
                      <option value="volvo">First Class</option>
                      <option value="saab">Second Class Upper</option>
                      <option value="opel">Second Class Lower</option>
                      <option value="audi">Third Class</option>
                    </select>
                </div>
                </div>
                {/* <!-- dropdown here --> */}
                <div>
                    <label for="country">Email Address</label>
                    <input type="text"/>
                </div>
              
            </div>
            {/* <!-- div row two two --> */}
            <div className="rightdiv-rowtwo-two">
            <div>
                <label for="phone-number">Phone Number</label>
                <input type="text"/>
            </div>
            <div>
                <label for="cars">Country</label>
                <input type="text"/>
            </div>
            <div id="dropdown-two">
                <div>
                <label for="specialization">Specialization</label>
                <select name="specialization" id="specialization">
                  <option value="frontend">Frontend </option>
                  <option value="backend">Backend</option>
                  <option value="devops">Devops</option>
                
                </select>
                </div>
            <div>
                <label for="cars">Years of Experience</label>
                <select name="experience" id="experience">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
            </div>
            </div>
            {/* <!-- dropdown here --> */}
            <div>
                <label for="location">Location</label>
                <input type="text" />
            </div>
          
              
            </div>
        </div>
  
    
    <div id="rightdiv-rowthree">
    <div>
<p>Reset All</p>
    </div>
    <div>
<button>Submit</button>
    </div>
    </div>
    
</div>
    </> );
}
 
export default Registeration;
import React, { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import LandingPageImage from "../assets/LandingPageImage.png";
import './LandingPage.css';
import Button from "../components/Button/Button";
import Cards from "../components/Cards/Cards";
import professional from "../assets/professional.png";
import reallife from "../assets/reallife.png";
import ePayments from "../assets/e-payments.png";
import salary from "../assets/salary.png";
import JobOpportunities from "../assets/jobopportunities.png";
import candidate from "../assets/candidate.png";
import SoftwareEngineerMain from "../assets/SoftwareEngineerMain.jpg";
import DevopsMain from "../assets/DevopsMain.jpg";
import QualityAssuranceMain from "../assets/QualityAssuranceMain.jpg";
import { useState } from "react";
import Slider from "../components/Slider/Slider";
import CustomizedAccordions from "../components/Accordion/Accordion";
import {  useNavigate } from "react-router-dom";
import ScrollTop from "../components/ScrollButton/Scrollbutton";
import CountdownTimer from "../components/Countdown/Countdown";
import { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";
import axios from "axios";
import { GetUserContext } from "../context/getUsercontext";
import { Slide } from "react-awesome-reveal";

const LandingPage = () => {
    const navigate = useNavigate();
    const userLoggedIn = JSON.parse(localStorage.getItem("loginval"));
    const{val,setVal} =useContext(UserAuthContext)
    const handleClickDashboard =()=>{
        navigate(`auth/dashboard/${userLoggedIn.id}`)
    }
    // sessionStorage.setItem('loginval', JSON.stringify(val))
    
    const { user, setUser } = useContext(GetUserContext)
    const urlone = `https://localhost:7051/api/v1/users/get-user/${val.id}`
    // const urltwo = `https://localhost:7051/api/v1/users/get-user/${id}`
    // useEffect(() => {
    //     axios.get(urlone)
    //         .then((response) => {
    //             console.log(response)
    //             setUser(response.data.user)
    //         }).then(() => { console.log(user) })
    //     //   axios.get(urltwo)
    //     //   .then((response)=> {
    //     //     console.log(response)
    //     //     setUser(response.data.user)
    //     //   }).then(()=> {console.log(user)})
    // }, [])
    console.log(val)
    const handleClick = () => {
        navigate('/registeration')
    }
    const displayYes = "flex";
    const displayNo = "none"
    const [currentDisplayOne, setcurrentDisplayOne] = useState(displayYes)
    const [currentDisplayTwo, setcurrentDisplayTwo] = useState(displayNo)
    const [currentDisplayThree, setcurrentDisplayThree] = useState(displayNo)
    return (
        <div className="landingpage-container">
            <div className="landingpage-section1">
              
                       <div className="landingpage-section1-left">
                       <Slide>
                        <h1>
                            Become <span>
                                Adept in Devops, Software Engineering or Quality Assurance
                            </span>  with 0-3 years experience
                        </h1>
                        <p>
                            Learn in one of the biggest Fintech Companies in the world and be a part of the solution for the next world changing idea                        </p>
                        {/* <Typewriter/> */}
                        <div>
                            {userLoggedIn?.isAuthenticated ? <Button styleClass='blue-button' value='Dashboard' onClick={handleClickDashboard} /> :
                           <><Button styleClass='blue-button' value='Apply Now' />

                            <Button styleClass='no-border-button' value='Watch Video' />
                            </> }
                        </div>
                        </Slide>
                    </div>
                    
                <div className="landingpage-section1-right">
                
                    <img src={LandingPageImage} alt="LandingPageImage" />
                    
                </div>
            </div>
            {/* Landing Page Section 2 */}
            <div className="landingpage-section2">
                <h1>Skyrocket your <span className="underline-effect">tech career</span> </h1>
            </div>
            <div className="landingpage-section2-carddiv">

                <div className="landingpage-section2-carddiv-row">

                    <Cards cardClass='cardOne'
                        mainText='Learn the basics of fundamentals of Electronic payments and be certified'
                        image={professional}
                        alt='Professional'
                        heading='Become a pro in fintech' />

                    <Cards cardClass='cardOne'
                        mainText='Network with other software engineers and fintech personnel that make the game playing decisions in the market in 2022 '
                        image={reallife}
                        alt='Real Life'
                        heading='Make Life-changing connections' />
                    <Cards cardClass='cardOne'
                        mainText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto sit perspiciatis eum consequatur alias quisquam tempore'
                        image={ePayments}
                        alt='E Payments'
                        heading='Become grounded in concepts of E-payments' />

                </div>

                <div className="landingpage-section2-carddiv-row">

                    <Cards cardClass='cardOne'
                        mainText='Get trained with a curriculum that is at par with the companies in the world'
                        image={candidate}
                        alt='Candidate'
                        heading='Best Curriculum' />

                    <Cards cardClass='cardOne'
                        mainText='Get paid at a higher rate than your colleagues in the industry'
                        image={salary}
                        alt='Salary'
                        heading='Competitive Salaries' />
                    <Cards cardClass='cardOne'
                        mainText='Stand a chance to get employed if you successfully get through the training at the Switch'
                        image={JobOpportunities}
                        alt='Job Opportunities'
                        heading='Get Employed' />
                </div>
            </div>
            {/* Landing Page Section 3 */}
            <div className="landingpage-section2">
                <h1>Specialize in one of three major <span className="underline-effect">career paths</span> </h1>
            </div>
            <div className="landingpage-section3">

                <div className="landingpage-section3-heading" >
                    <div className='landingpage-section3-heading-main' onClick={() => {
                        setcurrentDisplayTwo(displayNo)
                        setcurrentDisplayThree(displayNo)
                        setcurrentDisplayOne(displayYes)
                    }}>
                        <h3>
                            Software Engineering
                        </h3>
                    </div>
                    <div className='landingpage-section3-heading-main' onClick={() => {
                        setcurrentDisplayOne(displayNo)
                        setcurrentDisplayTwo(displayYes)
                        setcurrentDisplayThree(displayNo)
                    }}>
                        <h3>
                            Devops
                        </h3>
                    </div>
                    <div className='landingpage-section3-heading-main' onClick={() => {
                        setcurrentDisplayTwo(displayNo)
                        setcurrentDisplayOne(displayNo)
                        setcurrentDisplayThree(displayYes)
                    }}>
                        <h3>
                            Quality Assurance
                        </h3>
                    </div>
                </div>
                <div className="landingpage-section3-heading-details" style={{ display: currentDisplayOne, justifyContent: "space-evenly", alignItems: "center", alignContent: "center" }}>


                    <div className="landingpage-section3-image" >
                        <img src={SoftwareEngineerMain} alt="" />
                    </div>
                    <div className="landingpage-section3-heading-details-right">
                        <div><h1>Software Engineering</h1></div>
                        <div>
                            <h3>Do you want to build solutions through logical thinking and programming? The software Engineering track is specially designed to push your mental strengths to the limit and bring out the best in you! Get in and Get intensive!</h3>
                        </div>
                        <div className="landingpage-section3-heading-details-right-bottomdiv">
                            <div className="landingpage-section3-heading-details-right-bottomdiv-line">
                                <div className="landingpage-section3-heading-details-right-bottomdiv-line-divone"></div>
                                <div></div>
                            </div>
                            <div className="landingpage-section3-heading-details-right-bottomdiv-box"><p>C#/Java</p></div>
                        </div>
                    </div>
                </div>
                <div className="landingpage-section3-heading-details" style={{ display: currentDisplayTwo, justifyContent: "space-evenly", alignItems: "center", alignContent: "center" }}>


                    <div className="landingpage-section3-image">
                        <img src={DevopsMain} alt="" />
                    </div>
                    <div className="landingpage-section3-heading-details-right">
                        <div><h1>Devops</h1></div>
                        <div>
                            <h3>Development Operations track aims to train candidates to become specialists in different technologies that DevOps personnel use in our company. Interested in this track? Feel free to apply now and take the entrance examinations</h3>
                        </div>
                        <div className="landingpage-section3-heading-details-right-bottomdiv">
                            <div className="landingpage-section3-heading-details-right-bottomdiv-line">
                                <div className="landingpage-section3-heading-details-right-bottomdiv-line-divone"></div>
                                <div></div>
                            </div>
                            <div className="landingpage-section3-heading-details-right-bottomdiv-box"><p>ReQtest</p></div>
                        </div>
                    </div>
                </div>
                <div className="landingpage-section3-heading-details" style={{ display: currentDisplayThree, justifyContent: "space-evenly", alignItems: "center", alignContent: "center" }}>


                    <div className="landingpage-section3-image">
                        <img src={QualityAssuranceMain} alt="" />
                    </div>
                    <div className="landingpage-section3-heading-details-right">
                        <div><h1>Quality Assurance</h1></div>
                        {/* <div className="landingpage-section3-heading-details-right-logodiv">
                <img src={QualityAssurance} alt="Quality Assurance" />
                <h1>Quality Assurance</h1></div> */}
                        <div>
                            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quaerat rem at voluptas! Accusamus velit minus rerum, amet itaque maiores culpa dolor facilis deserunt qui iure praesentium, delectus blanditiis ex?</h3>
                        </div>
                        <div className="landingpage-section3-heading-details-right-bottomdiv">
                            <div className="landingpage-section3-heading-details-right-bottomdiv-line">
                                <div className="landingpage-section3-heading-details-right-bottomdiv-line-divone"></div>
                                <div></div>
                            </div>
                            <div className="landingpage-section3-heading-details-right-bottomdiv-box"><p>Python</p></div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Landing Page Section 4 */}
            <div className="landingpage-section4-text">
                <h1>Countdown to the <span className="underline-effect">next training</span> </h1>
            </div>
            <div className="landingpage-section4">
                <div className="landingpage-section4-overlay">

                    {/* time stamp to 4th October 2023 in milliseconds
  https://www.epochconverter.com/ */}
                    <CountdownTimer countdownTimestampMs={1696422522000} />
                </div>
            </div>
            {/* LandingPage FAQ */}
            <div className="faqsdiv">


                <div className="faqsdivh1" >
                    <h1> Frequently Asked<span className="underline-effect"> Questions</span> </h1>
                </div>
                <div className="FAQs">
                    <CustomizedAccordions />
                </div>
            </div>
            {/* Landing Page Section 5 */}
            <div className="landingpage-section5">
                <h1> <span className="underline-effect">Testimonials</span> </h1>
                <Slider />
            </div>
            {/* Landing Page Section 6 */}
            <div className="landingpage-section6">
                <div className="landingpage-section6-maindiv">
                    <h1>
                        Interested in Joining Us?
                    </h1>
                    <p>
                Interwitch Academy entry level trainings run multiple times each year.
                We receive a vast number of applications, so try apply early, prepare for the entrance examinations and get a feedback from us based on your performance.
                Click on the button below to get started!
                    </p>
                    <div className="landingpage-section6-maindiv-button">
                        <Button styleClass='blue-button' value='Apply Now' onClick={handleClick} />
                    </div>
                </div>
            </div>
            <ScrollTop />

        </div>
    );
}

export default LandingPage;
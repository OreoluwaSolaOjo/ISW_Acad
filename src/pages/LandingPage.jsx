import React from "react";
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
import Countdown from "../components/Slider/Slider";
import SoftwareEngineerMain from "../assets/SoftwareEngineerMain.jpg";
import DevopsMain from "../assets/DevopsMain.jpg";
import QualityAssuranceMain from "../assets/QualityAssuranceMain.jpg";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import SimpleSlider from "../components/Slider/Slider";
import Slider from "../components/Slider/Slider";
import CustomizedAccordions from "../components/Accordion/Accordion";

const LandingPage = () => {
    const displayYes = "flex";
    const displayNo = "none"
    const [currentDisplayOne, setcurrentDisplayOne] = useState(displayYes)
    const [currentDisplayTwo, setcurrentDisplayTwo] = useState(displayNo)
    const [currentDisplayThree, setcurrentDisplayThree] = useState(displayNo)
    return ( 
    <>
    <Navbar/>
    <div className="landingpage-section1">
        <div className="landingpage-section1-left">
        <h1>
            Become an <span>
            Adept Software Engineer
                </span>  with 0-3 years experience 
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptas voluptatem consectetur mollitia, aspernatur aut distinctio exercitationem saepe, esse ipsam hic, velit nostrum? Quae dolorum iusto sint amet adipisci ea?
        </p>
        <div>
    <Button styleClass='blue-button' value='Apply Now' />
<Button styleClass='no-border-button' value='Watch Video' />
        </div>
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
            mainText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto sit perspiciatis eum consequatur alias quisquam tempore'
            image={professional}
            alt='Professional'
            heading='Become a pro in fintech' />
             <Cards cardClass='cardOne'
            mainText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto sit perspiciatis eum consequatur alias quisquam tempore '
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
            mainText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto sit perspiciatis eum consequatur alias quisquam tempore'
            image={candidate}
            alt= 'Candidate'
            heading='Best Curriculum' />
       
             <Cards cardClass='cardOne'
            mainText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto sit perspiciatis eum consequatur alias quisquam tempore'
            image={salary}
            alt = 'Salary'
            heading='Competitive Salaries' />
            <Cards cardClass='cardOne'
            mainText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto sit perspiciatis eum consequatur alias quisquam tempore'
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
                <div className='landingpage-section3-heading-main' onClick={() =>  {
    setcurrentDisplayTwo(displayNo)
    setcurrentDisplayThree(displayNo)
    setcurrentDisplayOne(displayYes)
    }}>
                        <h3>
                        Software Engineering
                        </h3>  
                </div>
                <div className='landingpage-section3-heading-main' onClick={() =>  {
    setcurrentDisplayOne(displayNo)
    setcurrentDisplayTwo(displayYes)
    setcurrentDisplayThree(displayNo)
    }}>
                        <h3>
                        Devops
                        </h3>  
                </div>
                <div className='landingpage-section3-heading-main' onClick={() =>  {
    setcurrentDisplayTwo(displayNo)
    setcurrentDisplayOne(displayNo)
    setcurrentDisplayThree(displayYes)
    }}>
                        <h3>
                        Quality Assurance
                        </h3>  
                </div>
    </div>
    <div className="landingpage-section3-heading-details"  style={{ display: currentDisplayOne}}>

    
        <div className="landingpage-section3-image" >
        <img src={SoftwareEngineerMain} alt="" />
        </div>
        <div className="landingpage-section3-heading-details-right">
            <div><h1>Software Engineering</h1></div>
            <div>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quaerat rem at voluptas! Accusamus velit minus rerum, amet itaque maiores culpa dolor facilis deserunt qui iure praesentium, delectus blanditiis ex?</h2>
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
    <div className="landingpage-section3-heading-details" style={{ display: currentDisplayTwo}}>

    
        <div className="landingpage-section3-image">
        <img src={DevopsMain} alt="" />
        </div>
        <div className="landingpage-section3-heading-details-right">
            <div><h1>Devops</h1></div>
            <div>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quaerat rem at voluptas! Accusamus velit minus rerum, amet itaque maiores culpa dolor facilis deserunt qui iure praesentium, delectus blanditiis ex?</h2>
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
    <div className="landingpage-section3-heading-details" style={{ display: currentDisplayThree}}>

    
        <div className="landingpage-section3-image">
        <img src={QualityAssuranceMain} alt="" />
        </div>
        <div className="landingpage-section3-heading-details-right">
        <div><h1>Quality Assurance</h1></div>
            {/* <div className="landingpage-section3-heading-details-right-logodiv">
                <img src={QualityAssurance} alt="Quality Assurance" />
                <h1>Quality Assurance</h1></div> */}
            <div>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quaerat rem at voluptas! Accusamus velit minus rerum, amet itaque maiores culpa dolor facilis deserunt qui iure praesentium, delectus blanditiis ex?</h2>
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
    <div className="landingpage-section4">
    <h1>Countdown to the <span className="underline-effect">next training</span> </h1>
  <h2>10-09-2022</h2>
    </div>
    {/* LandingPage FAQ */}
  <div className="faqsdiv">

 
        <div className="faqsdivh1">
        <h1> Frequently Asked<span className="underline-effect"> Questions</span> </h1>
        </div>
        <div className="FAQs">
    <CustomizedAccordions/>
    </div>
    </div>
    {/* Landing Page Section 5 */}
    <div className="landingpage-section5">
    <h1> <span className="underline-effect">Testimonials</span> </h1>
    <Slider/>
    </div>
    {/* Landing Page Section 6 */}
    <div className="landingpage-section6">
<div className="landingpage-section6-maindiv">
<h1>
    Interested in Joining Us?
</h1>
<p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illum ipsum, quidem facilis commodi deserunt laboriosam fugit, quia minus, dicta nostrum. Eos veniam voluptatem esse blanditiis, tempora possimus quas libero quia impedit nulla eaque, officia, suscipit sapiente non sit voluptate! Fugit, eius veniam a maxime alias ullam deleniti consectetur in.
</p>
<div className="landingpage-section6-maindiv-button">
<Button styleClass='blue-button' value='Apply Now' />
    </div>
</div>
    </div>
    <Footer/>
    </>
     );
}
 
export default LandingPage;
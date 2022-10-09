import React from "react";
import "./Footer.css";
import ISWAcademyLogo from '../../assets/InterswitchAcademyLogo.png';
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
    return ( 
        <>
    <div className="footer-main">
        <div className="footer-main-logo-links">
<div className="footer-main-logo">
<img src={ISWAcademyLogo} alt="Interswitch Academy" />
</div>
<div className="footer-main-socialmedia">
<img src={twitter} alt="" />
<img src={facebook} alt="" />
<img src={linkedin} alt="" />
<img src={instagram} alt="" />
</div>
<div>

</div>

        </div>
        <div className="footer-main-informationlinks">
<h2>
    Information Links
</h2>
<p>Become a trainee</p>
<p>Privacy Policy</p>
<p>Terms and Condition</p>
        </div>
        <div className="footer-main-contactus">
<h2>Contact us</h2>
<p>caree</p>
        </div>
    </div>
    <div className="rightreserved">
    <p>
    All rights reserved @2022 Interswitch
</p>
    </div>
    </>
     );
}
 
export default Footer;
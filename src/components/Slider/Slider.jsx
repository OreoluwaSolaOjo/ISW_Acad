import React from "react";
import test1 from "../../assets/test1.jpg";
import test2 from "../../assets/test2.jpg";
import test3 from "../../assets/test3.jpg";
import test4 from "../../assets/test4.jpg";
import ImageSlider from "./ImageSlider";
import "./Slider.css";

const Slider = () => {
    const slides = [
     {
        url: test1,
        name: "Dauda"
      
     },{
        url: test2,
        name: "Adegboyega"
     },
     {
        url: test3,
   
        name: "Tobi"
     },
     {
        url: test4,
        name: "GB"
     }
    ]
  
    return ( 
        <div>
            
            <div className="slider-div">
        
            <ImageSlider slides={slides}/>
            </div>

        </div>
     );
}
 
export default Slider;
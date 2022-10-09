import { useState } from "react";
import star from "../../assets/star.png";
const slideStyles = {
  width: "30%",
  height: "80%",
  borderRadius: "25px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  
//   display: "flex",
//   alignContent: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  color: "#2195EC",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  color: "#2195EC",
};

const sliderStyles = {
  position: "relative",
  height: "100%",

};
const slideStylesText  = {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    marginLeft: "5%"
}
const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const slideStylesWidthBackgroundd = {
    ...slideStyles,
    borderRadius: "10px",
    width: "100%",
    height: "100%",
    display: 'flex',
    // paddingLeft: '5%',
    // paddingRight: '5%',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#F3F5F6",
    alignContent: "center",
  };
  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackgroundd}>

      <div style={slideStylesWidthBackground}>


      </div>
      <div style={slideStylesText}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iure error optio ullam blanditiis harum, reprehenderit voluptatum. Unde quos aspernatur ratione! Incidunt quo itaque impedit porro placeat debitis inventore nulla?</p>
        <h3 id="hthree">- {slides[currentIndex].name}</h3>
        <div className="stylesRatings">
<img src={star} alt="" />
<img src={star} alt="" />
<img src={star} alt="" />
<img src={star} alt="" />
<img src={star} alt="" />
</div>
      </div>
      </div>

      
     
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
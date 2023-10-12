import React, { useState, useEffect } from 'react';

import image1 from '../../style/1.jpg'; 
import image2 from '../../style/2.jpg'; 


function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const showDivs = (n) => {
      const slides = document.getElementsByClassName("mySlides");
      for (let slide of slides) {
        slide.style.display = "none";
      }
      if (n > slides.length) { setSlideIndex(1); }
      else if (n < 1) { setSlideIndex(slides.length); }
      else if (slides[slideIndex - 1]) {  // Check if the slide exists before setting style
        slides[slideIndex - 1].style.display = "block";
      }
    }

    showDivs(slideIndex);

    const interval = setInterval(() => {  
      plusDivs(1);
    }, 3000);  

    return () => clearInterval(interval); 

  }, [slideIndex]);

  const plusDivs = (n) => {
    setSlideIndex(prevSlideIndex => prevSlideIndex + n);
  }

  return (
    <div>
      <div className="mySlides"><img src={image1} alt="Slide 1" /></div>
      <div className="mySlides"><img src={image2} alt="Slide 2" /></div>


    </div>
  );
}

export default Slider;

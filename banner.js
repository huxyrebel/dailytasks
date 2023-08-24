import React, { useEffect, useState } from 'react';
import './banner.css';

function Banner() {
  const [slideDown, setSlideDown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlideDown(true);
    }, 1000); // Delay for the slide-down animation (adjust as needed)

    // Clean up animation class after animation completes
    setTimeout(() => {
      setSlideDown(false);
    }, 2000); // Adjust to match the animation duration
  }, []);

  return (
    <div className={`banner-container ${slideDown ? 'slide-down' : ''}`}>
      <h1>Mental health</h1>
      <p><strong>What is mental illness?</strong></p>
      <button>Get appointment</button>
    </div>
  );
}

export default Banner;

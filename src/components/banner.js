import React from 'react';
import '../components/banner.css';

function Banner() {
  return (
    <div className='banner-container d-flex'>
      <img src='https://images.unsplash.com/photo-1512295767273-ac109ac3acfa' alt='Banner' />
      <div className='banner-content'>
        <h5><strong>Give your store a brand</strong></h5>
        <p>We stay on top of current design trends and concepts, aiming to be ahead of the curve <br/> 
        also implementing classic design principles into our work.</p>
        <button type="button" className="btn btn-primary">Learn More</button>
      </div>
    </div>
  );
}

export default Banner;

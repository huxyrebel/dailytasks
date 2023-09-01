import React from 'react';


function Hero() {
  return (
    <div className='hero-container mt-4 mb-4'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-4 text-center'>
            <h1>Welcome to Pearl-Continental Hotels & Resorts</h1>
           
            <p>Pearl-Continental Hotels & Resorts have always achieved excellent international standards of quality products & services. The Group is consistently focused on enhancing its brand & creating memorable experiences for people.</p>
            <h6 class="text-right g-book pr-4 pr-md-5 mt-5">HASHOO GROUP</h6>

          </div>
          <div className='col-md-4 text-center'>
            <img src='https://www.pchotels.com/asset/images/img-1.jpg' alt='Hotel' className='img-fluid mx-auto d-block'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

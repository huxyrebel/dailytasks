import React from 'react';
import '../components/banner.css';

function Banner() {
  return (
    <div className='container d-flex mt-5'>
      <div className='row'>
        <div className='col-12 col-md bann'>
          <span className='b'>Market</span>
          <span className='b'>Product</span>
          <span className='b'>Services</span>
          <span className='b'>Templates</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;

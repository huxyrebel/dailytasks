import React from 'react';
import '../components/bottom.css';

function Bottom() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <h3 style={{ color: '#2D4C41' }}>All sellers</h3>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6 mb-3'>
          <div className='p'>
            <h5 style={{ color: 'white' }}>Until the end of the month</h5>
          </div>
        </div>
        <div className='col-6 col-md-3 mb-3'>
          <div className='t'>
            <h5 style={{ color: 'white' }}>Lifeproof</h5>
          </div>
        </div>
        <div className='col-6 col-md-3'>
          <div className='y'>
            <h5 style={{ color: 'white' }}>SkywareStore</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;

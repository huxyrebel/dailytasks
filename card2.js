import React from 'react';
import './card2.css'; // Import the custom CSS file

function Card2() {
  return (
    <div className='card2-container'>
      <div className='row '>
        <div className='col-6 custom-col'>
          <h5>Experiences</h5>
          <h3>Explore Pakistan</h3>
          <p>Unveil extraordinary experiences. Explore the green hills of Kashmir. Watch the sunset on the beautiful skylines of Karachi. Take a stroll along the sandy beach of Gwadar.</p>
        </div>
        <div className='col-6 custom-col'>
          <img src='https://www.pchotels.com/asset/images/badshahi-masjid.jpg' alt='Explore Pakistan' />
        </div>
      </div>

      <div className='row'>
        <div className='col-6 custom-col'>
          <img src='https://www.pchotels.com/asset/images/coffe.jpg' alt='Spa and Wellness' />
        </div>
        <div className='col-6 custom-col'>
          <h5>Spa and Wellness</h5>
          <h3>Relax and Rejuvenate</h3>
          <p>Ease all tensions in the crystal-clear swimming pools. Indulge in the sauna to invigorate and revitalize. Utilize top gym facilities with an extensive range of fitness and weight training equipment in the Health Club.</p>
        </div>
      </div>
      
    </div>
  );
}

export default Card2;

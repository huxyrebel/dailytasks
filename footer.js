import React from 'react';
import { AiFillAndroid } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";

function Footer() {
  return (
    <div style={{ backgroundColor: "black", color: "white", height: '100vh', padding: '0 20px' }}>
      <div className='container' style={{ maxWidth: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div className='row'>
          <div className='col-4'>
            <img src='https://www.pchotels.com/asset/images/pcmobileapp.png' alt="Pearl-Continental Hotels" />
          </div>
          <div className='col-6'>
            <div>
              <h2 style={{ color: "golden" }}>Pearl-Continental Hotels & Resorts</h2>
              <p>
                Pearl-Continental Hotels & Resorts is Pakistan's leading five-star hotel chain, with seven hotels across the country. Find your preferred Pearl-Continental Hotel or Resort, book your room, and safely pay for your reservation online. Enjoy the Pearl-Continental hospitality experience, offering unparalleled service and premium quality in hospitality. Download the app and become a part of our Loyalty Programme.
              </p>
              <button> available on android<AiFillAndroid /></button><br></br>
              <button> available on app store<AiFillApple /></button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;

import React from 'react';
import '../components/main.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Main() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-8 half-1 mb-3'>
          <h2>Shopping this spring</h2>
        </div>
        <div className='col-md-4'>
          <div className='row mb-3 e'>
            <div>
              <h5>Have a promo code</h5>
              <input type='text' />
              <button type='submit' style={{ backgroundColor: '#EBA463', color: 'white', border: 'none' }}>
                <AiOutlineArrowRight />
              </button>
              <a href='#' style={{ textDecoration: 'none', color: '#EBA463' }}> All promotions and coupons</a>
            </div>
          </div>
          <div className='row mt-3 half-22'>
            <h4>Free shipping</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

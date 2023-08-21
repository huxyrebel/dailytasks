import React from 'react';
import { GoStack } from 'react-icons/go';
import '../components/header.css';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo' > 
        <GoStack />
        <p><strong>Graphic city</strong></p>
      </div>
      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <a className='nav-link active'style={{textDecoration:"none",color:"grey"}} aria-current='page' href='#'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link'style={{textDecoration:"none",color:"grey"}} href='#'>
            About Us
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link'style={{textDecoration:"none",color:"grey"}} href='#'>
            Services
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;

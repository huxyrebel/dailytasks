import React from 'react';
import "../components/header.css"
function Header() {
  return (
    <div className='container d-flex justify-content-center'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
        <img src='https://www.pchotels.com/asset/images/logo.svg'  alt='Logo' style={{width:"10%",backgroundColor:'black'}} />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Find a Hotel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Offers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Event&Celebration</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Dining</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Rewards Programme</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">More</a>
              </li>
              <li>
              <button className="booknow"  type="submit">Search</button>

              </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

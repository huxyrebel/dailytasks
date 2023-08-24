import React from 'react';
import '../components/header.css';
import { FiBox } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';

function Header() {
  return (
    <div className="container d-flex mt-3">
      <div className="row">
        {/* Heading */}
        <div className="col-12 col-md-1 heading"> {/* Adjust the column width */}
          <h1>Olly</h1>
        </div>

        {/* Icons */}
        <div className="col-12 col-md-4 icon-col"> {/* Adjust the column width */}
          <div className="icons">
            <FiBox style={{ fontSize: "24px" }} />
            <AiOutlineHeart style={{ fontSize: "24px" }} />
            <RiShoppingBasketFill style={{ fontSize: "24px" }} />
          </div>
        </div>

        {/* Navbar */}
        <div className="col-12 col-md-7"> {/* Adjust the column width */}
          <nav className="navbar navbar-light">
            <form className="form-inline">
              <input
                className="form-control wide-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="Sub" style={{ width: "50px" }}>
                <AiOutlineSearch />
              </button>
            </form>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
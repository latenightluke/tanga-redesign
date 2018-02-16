import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import TangaLogoWhite from '../../assets/tanga-logo-white.svg';

import NewsBanner from './NewsBanner';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaUser from 'react-icons/lib/fa/user';
import FaSearch from 'react-icons/lib/fa/search';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className=" bs-1">
          <NewsBanner/>
          <div className="Header container-fluid bg-red align-items-center px-4 d-flex flex-row justify-content-between">
            <NavLink to="/play" className="d-inline-flex mr-auto">
              <img className="tanga-logo " style={{width: "77px"}} src={TangaLogoWhite} alt="Tanga Logo" />
            </NavLink>
            <div className="search-input d-inline-flex ml-auto" style={{position: "relative"}}>
              <input type="text" placeholder="Search deals..." className="fw-light ml-4" style={{minWidth: "600px", maxWidth: "600px"}}/>
              <FaSearch className="fs-17 text-red" style={{position: "absolute", right: "12px", top: "9px", cursor: "pointer"}} />
            </div>
            <div className="d-inline-flex ml-auto">
              <a href="" className="text-white pl-4">
                <FaQuestionCircle className="fs-18 mr-2 mb-1" style={{marginTop: "2px"}} />
                Support <FaAngleDown className="mb-1" style={{marginTop: "3px"}} />
              </a>
              <a href="" className="text-white pl-4">
                <FaUser className="fs-17 mr-2 mb-1" style={{marginTop: "2px"}} />
                Account <FaAngleDown className="mb-1" style={{marginTop: "3px"}} />
              </a>
              <a href="" className="text-white pl-4">
                <FaShoppingCart className=" fa-lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="Margin"></div>
      </div>
    );
  }
}

export default Header;

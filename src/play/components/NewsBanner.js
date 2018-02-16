import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import FaHeart from 'react-icons/lib/fa/heart';
import FaTruck from 'react-icons/lib/fa/truck';
import FaLongArrowRight from 'react-icons/lib/fa/long-arrow-right';
import FaLongArrowLeft from 'react-icons/lib/fa/long-arrow-left';

import './NewsBanner.css';

class NewsBanner extends Component {
  render() {
    return (
      <div className="NewsBanner container-fluid bg-dark-red text-white text-center text-md-left fs-xs px-4 d-flex justify-content-between">
        <div className="d-flex">
          <b>Free Returns</b>&nbsp; • 100% Risk Free, 100% Easy <FaLongArrowRight className="ml-2 mt-1" />
        </div>
        <NavLink to="/" className="d-flex text-white"><FaLongArrowLeft className="mr-2 mt-1"/>Back To Pattern Library</NavLink>
        <div className="d-flex fw-regular">
          <NavLink to="/" className="NavLink text-white mr-4">
            <span className="Text"><FaHeart className="mr-2 mb-1" />My Likes</span>
          </NavLink>
          <NavLink to="/" className="NavLink text-white">
            <span className="Text"><FaTruck className="mr-2 mb-1" />Track An Order</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NewsBanner;

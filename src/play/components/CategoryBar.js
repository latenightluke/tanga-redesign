import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import FaTh from 'react-icons/lib/fa/th';
import FaMale from 'react-icons/lib/fa/male';
import FaFemale from 'react-icons/lib/fa/female';
import FaPlug from 'react-icons/lib/fa/plug';
import FaHome from 'react-icons/lib/fa/home';
import FaMedkit from 'react-icons/lib/fa/medkit';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import FaTag from 'react-icons/lib/fa/tag';

import './CategoryBar.css';

class CategoryBar extends Component {
  render() {
    return (
      <div className="bs-sm" style={{marginBottom: "3px"}}>
        <div className="CategoryBar container-fluid bg-white px-4 fs-xs" style={{overflow: "hidden", overflowY: "visible", maxWidth: "100%"}}>
          <NavLink to="/play/category" className="n-link">
            <span className=""><FaTh className="mr-2 fs-13"></FaTh>All Categories</span>
          </NavLink>
          <NavLink to="/play/category" className="n-link">
            <span className=""><FaMale className="fa fa-male mr-2 fs-14"></FaMale>Men</span>
          </NavLink>
          <NavLink to="/play/category" className="n-link">
            <span className=""><FaFemale className="fa fa-female mr-2 fs-14"></FaFemale>Women</span>
          </NavLink>
          <NavLink to="/play/category" className="n-link">
            <span className=""><FaPlug className="fa fa-plug mr-2 fs-13"></FaPlug>Electronics</span>
          </NavLink>
          <NavLink to="/play/category" className="n-link">
            <span className=""><FaHome className="fa fa-home mr-2 fs-15"></FaHome>Home</span>
          </NavLink>
          <NavLink to="/play/category" className="n-link">
            <span className=""><FaMedkit className="fa fa-medkit mr-2 fs-13"></FaMedkit>Health & Beauty</span>
          </NavLink>
          <NavLink to="/play/category" className="n-link">
            <span className=""><FaGraduationCap className="fa fa-graduation-cap mr-2 fs-13"></FaGraduationCap>Courses</span>
          </NavLink>
          <NavLink to="/play/category" className="n-link">
            <span className="text-red"><FaTag className="fa fa-tag mr-2 fs-13"></FaTag>Clearance</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default CategoryBar;

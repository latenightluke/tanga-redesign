import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TangaLogoRed from '../../assets/tanga-logo-red.svg';

import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaLongArrowRight from 'react-icons/lib/fa/long-arrow-right';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-container">
          <NavLink to="/" className="bg-white p-4 d-block bb-1-cloud text-center">
            <img src={TangaLogoRed} className="img-fluid mx-auto" alt=""/>
            <p className="mb-0 fs-14 text-charcoal text-center fw-regular">Pattern Library</p>
          </NavLink>

          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div>
              <div role="tab" id="headingOne">
                <a className="px-4 py-3 d-block bg-white bb-1-cloud fw-6" style={{position: "relative"}}  data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Overview <FaAngleDown className="text-gray" style={{position: "absolute", right: "1.5rem", top: "19px"}} />
                </a>
              </div>
              <ul className="collapse show mb-0 bb-1-cloud submenu" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
                <li>
                  <NavLink to="/" exact activeClassName="active" className="navItem">
                    Overview
                  </NavLink>
                  <NavLink to="/brand-foundations" activeClassName="active" className="navItem">
                    Brand Foundations
                  </NavLink>
                  <NavLink to="/audience-personas" activeClassName="active" className="navItem">
                    Audience Personas
                  </NavLink>
                  <NavLink to="/verbal-strategy" activeClassName="active" className="navItem">
                    Verbal Strategy
                  </NavLink>
                  <NavLink to="/code-guidelines" activeClassName="active" className="navItem">
                    Code Guidelines
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <div role="tab" id="headingTwo">
                <a className="collapsed px-4 py-3 d-block bg-white bb-1-cloud fw-6" style={{position: "relative"}}  data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Design <FaAngleDown className="text-gray" style={{position: "absolute", right: "1.5rem", top: "19px"}} />
                </a>
              </div>
              <ul className="collapse mb-0 bb-1-cloud submenu" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo">
                <li>
                  <NavLink to="/logo-usage" activeClassName="active" className="navItem">
                    Logo Usage
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/colors" activeClassName="active" className="navItem">
                    Colors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/typography" activeClassName="active" className="navItem">
                    Typography
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/borders" activeClassName="active" className="navItem">
                    Borders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/box-shadows" activeClassName="active" className="navItem">
                    Box Shadows
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/utilities" activeClassName="active" className="navItem">
                    Utilities
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <div role="tab" id="headingThree">
                <a className="collapsed px-4 py-3 d-block bg-white bb-1-cloud fw-6" style={{position: "relative"}}  data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Components <FaAngleDown className="text-gray" style={{position: "absolute", right: "1.5rem", top: "19px"}} />
                </a>
              </div>
              <ul className="collapse mb-0 bb-1-cloud submenu" id="collapseThree" role="tabpanel" aria-labelledby="headingThree">
                <li>
                  <NavLink to="/buttons" activeClassName="active" className="navItem">
                    Buttons
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pill-labels" activeClassName="active" className="navItem">
                    Pill Labels
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <div role="tab" id="headingFour">
                <a className="collapsed px-4 py-3 d-block bg-white bb-1-cloud fw-6" style={{position: "relative"}}  data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Views <FaAngleDown className="text-gray" style={{position: "absolute", right: "1.5rem", top: "19px"}} />
                </a>
              </div>
              <ul className="collapse mb-0 bb-1-cloud submenu" id="collapseFour" role="tabpanel" aria-labelledby="headingFour">
                <li>
                  <NavLink to="/grade-breakdown" activeClassName="active" className="navItem">
                    Grade Breakdown
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/chrome-extension" activeClassName="active" className="navItem">
                    Chrome Extension
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <a className="px-4 py-3 d-block bg-red bb-1-cloud fw-6">
                <NavLink to="/play" activeClassName="active" className="navItem text-white">
                  New Tanga Playground <FaLongArrowRight/>
                </NavLink>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

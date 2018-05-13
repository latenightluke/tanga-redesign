import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import logo from '../../assets/logo/red.svg';

import Button from '../Button/Button';

import styles from './LibNavbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.navContainer + " bg-white"}>
          <NavLink to="/" className="bg-white p-4 d-block bb-1-cloud text-center">
            <img src={logo} className="img-fluid mx-auto" alt="Tanga" />
            <p className="mb-0 fs-14 text-charcoal text-center fw-regular">Pattern Library</p>
          </NavLink>

          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div>
              <div role="tab" id="headingOne">
                <a className="px-4 py-3 d-block bg-white bb-1-cloud fw-6" style={{position: "relative"}}  data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Overview <FontAwesomeIcon icon="angle-down" className="text-gray" style={{position: "absolute", right: "1.5rem", top: "19px"}} />
                </a>
              </div>
              <ul className="collapse show mb-0 bb-1-cloud submenu" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
                <li>
                  <NavLink to="/" exact activeClassName="active" className={styles.navItem}>
                    Overview
                  </NavLink>
                  <NavLink to="/brand-foundations" activeClassName="active" className={styles.navItem}>
                    Brand Foundations
                  </NavLink>
                  <NavLink to="/audience-personas" activeClassName="active" className={styles.navItem}>
                    Audience Personas
                  </NavLink>
                  <NavLink to="/verbal-strategy" activeClassName="active" className={styles.navItem}>
                    Verbal Strategy
                  </NavLink>
                  <NavLink to="/code-guidelines" activeClassName="active" className={styles.navItem}>
                    Code Guidelines
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <div role="tab" id="headingTwo">
                <a className="collapsed px-4 py-3 d-block bg-white bb-1-cloud fw-6" style={{position: "relative"}}  data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Design <FontAwesomeIcon icon="angle-down" className="text-gray" style={{position: "absolute", right: "1.5rem", top: "19px"}} />
                </a>
              </div>
              <ul className="collapse mb-0 bb-1-cloud submenu" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo">
                <li>
                  <NavLink to="/logo-usage" activeClassName="active" className={styles.navItem}>
                    Logo Usage
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/colors" activeClassName="active" className={styles.navItem}>
                    Colors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/typography" activeClassName="active" className={styles.navItem}>
                    Typography
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/borders" activeClassName="active" className={styles.navItem}>
                    Borders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/box-shadows" activeClassName="active" className={styles.navItem}>
                    Box Shadows
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/utilities" activeClassName="active" className={styles.navItem}>
                    Utilities
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <div role="tab" id="headingThree">
                <a className="collapsed px-4 py-3 d-block bg-white bb-1-cloud fw-6" style={{position: "relative"}}  data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Components <FontAwesomeIcon icon="angle-down" className="text-gray" style={{position: "absolute", right: "1.5rem", top: "19px"}} />
                </a>
              </div>
              <ul className="collapse mb-0 bb-1-cloud submenu" id="collapseThree" role="tabpanel" aria-labelledby="headingThree">
                <li>
                  <NavLink to="/buttons" activeClassName="active" className={styles.navItem}>
                    Buttons
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pill-labels" activeClassName="active" className={styles.navItem}>
                    Pill Labels
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="p-3" style={{position: "absolute", bottom: "0px", left: "0px", right: "0px"}}>
              <Button to="/play" theme="primary" className="w-100" >
                Tanga Playground <FontAwesomeIcon icon="long-arrow-alt-right" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

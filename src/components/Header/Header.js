import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import PropTypes from 'prop-types';

import logo from '../../assets/logo/white.svg';

import NewsBanner from '../NewsBanner/NewsBanner';
import AdminBar from '../AdminBar/AdminBar';

// import FaQuestionCircle from 'react-icons/lib/fa/question-circle';
// import FaAngleDown from 'react-icons/lib/fa/angle-down';
// import FaUser from 'react-icons/lib/fa/user';
// import FaSearch from 'react-icons/lib/fa/search';
// import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';

import styles from './Header.module.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      admin: false
    };
  }

  render() {
    return (
      <div className="fixed-top">
        <div>
          {this.props.isAdmin ? (<AdminBar />) : null}
          <NewsBanner/>
          <div className="container-fluid bg-red align-items-center px-md-4 px-3 py-2 d-flex flex-row justify-content-between text-center text-md-left">
            <NavLink to="/" className="d-inline-flex mr-auto text-center text-md-left">
              <img className={styles.logo} src={logo} alt="Tanga Logo" />
            </NavLink>
            <div className={styles.search + " d-flex mx-auto justify-content-center justify-self-center align-self-center"} style={{position: "relative"}}>
              <input type="text" placeholder="Search deals..." className="fw-light ml-4"/>
              <FontAwesomeIcon icon="search" className="text-red fs-sm" style={{position: "absolute", right: "12px", top: "9px", cursor: "pointer"}} />
            </div>
            <div className="align-self-center d-none d-md-flex">
              <a href="" className="text-white pl-4 d-flex align-items-center align-content-center">
                <FontAwesomeIcon icon="question-circle" className="mr-2 mb-1 fs-sm" />
                Support <FontAwesomeIcon icon="angle-down" className="ml-2" />
              </a>
              <a href="" className="text-white pl-4 d-flex align-items-center align-content-center">
                <FontAwesomeIcon icon="user" className="mr-2 mb-1 fs-sm" />
                Account <FontAwesomeIcon icon="angle-down" className="ml-2" />
              </a>
              <a href="" className="text-white pl-4 d-flex align-items-center align-content-center">
                <FontAwesomeIcon icon="shopping-cart" className="fs-md" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import FaLongArrowRight from 'react-icons/lib/fa/long-arrow-right';
import FaLongArrowLeft from 'react-icons/lib/fa/long-arrow-left';

import styles from './NewsBanner.module.css';

class NewsBanner extends Component {
  render() {
    return (
      <Container fluid className={styles.base + " bg-dark-red text-white text-center text-md-left fs-xs px-md-4 px-2 d-flex justify-content-between"}>
        <div className="d-inline-flex fw-regular text-center text-md-left align-self-center">
          <span>Free Returns</span><span className="mx-2">•</span>100% Risk Free, 100% Easy <FaLongArrowRight className="ml-2 mt-1" />
        </div>
        <NavLink to="/" className="d-none d-md-flex text-white">
          <FaLongArrowLeft className="mr-2 mt-1"/>Back To Pattern Library
        </NavLink>
        <div className="fw-regular d-none d-md-flex">
          <NavLink to="/" className="NavLink text-white mr-4">
            <span className="text">
              <FontAwesomeIcon icon="heart" className="mr-2 mb-1" />My Likes</span>
          </NavLink>
          <NavLink to="/" className={styles.link + " text-white"}>
            <span className="text">
              <FontAwesomeIcon icon="truck" className="mr-2 mb-1" />Track An Order
            </span>
          </NavLink>
        </div>
      </Container>
    );
  }
}

export default NewsBanner;

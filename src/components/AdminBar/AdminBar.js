import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class AdminBar extends Component {
  render() {
    return (
      <div className="bg-black text-white text-center text-md-left fs-xs py-2 d-flex justify-content-between">
        <div className="d-flex fw-regular">
          <div
            className="search-input d-inline-flex ml-auto m-1"
            style={{ position: 'relative' }}
          >
            <input
              type="text"
              placeholder="Search products..."
              className="fw-light ml-4"
              style={{ minWidth: '200px', maxWidth: '200px' }}
            />
            <FontAwesomeIcon
              icon="search"
              className="fs-sm text-black"
              style={{
                position: 'absolute',
                right: '12px',
                top: '9px',
                cursor: 'pointer',
              }}
            />
          </div>
          <div
            className="search-input d-inline-flex ml-auto m-1"
            style={{ position: 'relative' }}
          >
            <input
              type="text"
              placeholder="Search orders..."
              className="fw-light ml-4"
              style={{ minWidth: '200px', maxWidth: '200px' }}
            />
            <FontAwesomeIcon
              icon="search"
              className="fs-sm text-black"
              style={{
                position: 'absolute',
                right: '12px',
                top: '9px',
                cursor: 'pointer',
              }}
            />
          </div>
          <NavLink
            to="/play/admin/customize"
            activeClassName="text-white"
            className="nav-link text-pebble align-self-center mt-1"
          >
            Customize{' '}
          </NavLink>
          {/* <FaAngleDown className="text-white"/> */}
          {/* <Button theme="secondary" size="sm">Admin Portal <FaLongArrowRight /></Button> */}
        </div>
      </div>
    );
  }
}

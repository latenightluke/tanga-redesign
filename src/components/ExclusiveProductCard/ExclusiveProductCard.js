import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from './Button';

import FaStar from 'react-icons/lib/fa/star';
import FaTruck from 'react-icons/lib/fa/truck';

// import './ExclusiveProductCard.css';

class ExclusiveProductCard extends Component {
  render() {
    return (
      <div className="col-8">
        <NavLink to={this.props.buyLink} className="ExclusiveProductCard d-block mb-4 bg-white br-sm p-3">
          <div className="row p-3">
            <div className="col-5">
              <div className="ImageContainer">
                <div className="SquareBanner bg-blue p-2">
                  <div className="SquareContent px-2">
                    <div>
                      <span className="text-white fs-md">Deal of the Day!</span>
                    </div>
                  </div>
                </div>
                <div className="RectangleBanner bg-orange font-italic fw-bold text-white px-3 pt-2 pb-1 mb-0 ls-1">
                  Hurry! Only 4 Left!
                </div>
                <img src={this.props.image} className="mx-auto img-fluid" alt=""/>
              </div>
            </div>
            <div className="col-6">
              <h3 className="Name mb-0 fw-bold mb-0">
                {this.props.name}
              </h3>
              <div className="card-container">
                <div className="Reviews fs-xs text-yellow mb-5">
                  <FaStar className=""/>
                  <FaStar className=""/>
                  <FaStar className=""/>
                  <FaStar className=""/>
                  <FaStar className="mr-1"/>
                  <span className="text-gray fw-light">(125)</span>
                </div>
                <h5 className="fs-lg fw-bold text-red mb-0">
                  {this.props.price}
                </h5>
                <p className="text-charcoal fs-sm mb-0 fw-regular" style={{marginTop: "-8px"}}>
                  <FaTruck className="mr-1 mb-1" />{this.props.shipping}
                </p>
                <Button theme="primary" size="md" className="mt-5">Get It Now!</Button>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </NavLink>
      </div>
    );
  }
}

ExclusiveProductCard.propTypes = {
  buyLink: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  shipping: PropTypes.string
}

ExclusiveProductCard.defaultProps = {
  buyLink: "/play/product-page",
  image: "",
  price: "",
  shipping: ""
}


export default ExclusiveProductCard;

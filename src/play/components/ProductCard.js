import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import FaStar from 'react-icons/lib/fa/star';
import FaTruck from 'react-icons/lib/fa/truck';

import './ProductCard.css';

class ProductCard extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="col-12 col-md-2">
        <NavLink to={this.props.buyLink} className="ProductCard d-block mb-4 bg-white br-sm p-3">
          <div className="ImageContainer mb-2">
            <div className="SquareBanner bg-red text-white fs-xxs p-2">
              <div className="SquareContent">
                <div>
                  <span>You Save 10%!</span>
                </div>
              </div>
            </div>
            <img src={this.props.image} className="mx-auto img-fluid" alt=""/>
          </div>
          <div className="card-container">
            <h6 className="Name mb-0 fw-regular mb-0 fs-15">
              {this.props.name}
            </h6>
            <div className="Reviews fs-xxs text-yellow mb-3">
              <FaStar className=""/>
              <FaStar className=""/>
              <FaStar className=""/>
              <FaStar className=""/>
              <FaStar className="mr-1"/>
              <span className="text-gray fw-light">(125)</span>
            </div>
            <h5 className="fs-md fw-bold text-red mb-0">
              {this.props.price}
            </h5>
            <p className="text-charcoal fs-xxs mb-0 fw-regular" style={{marginTop: "-6px"}}>
              <FaTruck className="mr-1 mb-1" />{this.props.shipping}
            </p>
          </div>
        </NavLink>
      </div>
    );
  }
}

ProductCard.propTypes = {
  buyLink: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  shipping: PropTypes.string
}

ProductCard.defaultProps = {
  buyLink: "/play/product-page",
  image: "",
  price: "",
  shipping: ""
}


export default ProductCard;

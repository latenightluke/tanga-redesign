import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Button from './Button';

import './FeaturedProductCard.css';

class FeaturedProductCard extends Component {
  render() {
    return (
      <div className="FeaturedProductCard col text-center">
        <h4 className="text-charcoal text-center mx-auto">{this.props.headerText}</h4>
        <img src={this.props.image} className="img-fluid mb-3 p-3" alt=""/>
        <Button theme="primary" className="mx-auto">{this.props.ctaText}</Button>
      </div>
    );
  }
}

FeaturedProductCard.propTypes = {
  buyLink: PropTypes.string,
  headerText: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string
}

FeaturedProductCard.defaultProps = {
  buyLink: "",
  headerText: "Featured Product",
  image: "",
  ctaText: "Shop Now"
}


export default FeaturedProductCard;

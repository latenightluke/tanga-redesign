import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import './CategoryCard.css';

class CategoryCard extends Component {
  render() {
    return (
      <NavLink to={this.props.path} className="CategoryCard col-md-2">
        <img src={this.props.image} className="CategoryImage img-fluid rounded-circle bs-sm p-3 bg-white" alt=""/>
        <div className="CategoryName text-black fw-bold text-center mt-2 mx-auto">{this.props.name}</div>
      </NavLink>
    );
  }
}

CategoryCard.propTypes = {
  path: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string
}

CategoryCard.defaultProps = {
  path: "play/channel",
  image: "",
  name: "Category"
}


export default CategoryCard;

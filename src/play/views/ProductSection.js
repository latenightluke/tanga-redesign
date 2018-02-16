import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProductSection.css';

class ProductSection extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="ProductSection container-fluid px-3 px-md-5 mt-5">
        <h3 className="SectionName mb-0">{this.props.name}</h3>
        <span className="SectionNameUnderline mb-3 d-inline-block" style={{width: "50px"}}></span>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}

ProductSection.propTypes = {
  name: PropTypes.string
}

ProductSection.defaultProps = {
  name: "Section Name",
}

export default ProductSection;

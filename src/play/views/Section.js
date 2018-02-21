import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Section.css';

class Section extends Component {
  render() {
    return (
      <div className="Section container-fluid mb-5 px-0">
        <h3 className="SectionName mb-1">{this.props.name}</h3>
        {/* <span className="SectionNameUnderline mb-3 d-inline-block mx-auto" style={{width: "50px"}}></span> */}
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string
}

Section.defaultProps = {
  name: "Section Name",
}

export default Section;

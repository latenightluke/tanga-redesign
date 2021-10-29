import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row } from "reactstrap";

class Section extends Component {
  render() {
    return (
      <div className="mb-5">
        <div className="text-2xl font-bold mb-1">{this.props.name}</div>
        <div className="grid grid-cols-6">{this.props.children}</div>
      </div>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string,
};

Section.defaultProps = {
  name: "Section Name",
};

export default Section;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Button.css';

let classNames = require('classnames');

class Button extends Component {
  render() {
    let buttonClasses = classNames(
      'Button',
      'button-' + this.props.theme,
      'button-' + this.props.size
    );

    return (
      <NavLink to={this.props.to} className={buttonClasses + " " + this.props.className} style={{width: `${this.props.width}`}}>
        {this.props.children}
      </NavLink>
    )
  }
}

Button.propTypes = {
  theme: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success', 'info', 'warning']),
  width: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  to: PropTypes.string
};

Button.defaultProps = {
  theme: "primary",
  width: "",
  size: "md",
  to: ""
};

export default Button;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import styles from './Button.module.css';
let cx = classNames.bind(styles);

class Button extends Component {
  render() {
    let buttonClasses = cx(
      styles.base,
      styles[this.props.theme],
      styles[this.props.size],
      styles[this.props.border]
    );

    return (
      <NavLink
        to={this.props.to}
        activeClassName="button-active"
        className={buttonClasses + ' ' + this.props.className}
        style={{ width: `${this.props.width}` }}
      >
        {this.props.children}
      </NavLink>
    );
  }
}

Button.propTypes = {
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'success',
    'info',
    'warning',
  ]),
  width: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  to: PropTypes.string,
};

Button.defaultProps = {
  theme: 'primary',
  width: '',
  size: 'md',
  to: '',
};

export default Button;

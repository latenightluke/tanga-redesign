import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import classNames from "classnames";
// import styles from "./Button.module.scss";

export default function Button({
  theme,
  width,
  size,
  to,
  className,
  children,
}) {
  // let buttonClasses = cx(styles[theme], styles[size], styles[border]);

  // &:hover {
  //   box-shadow: inset 0px -3px 0px 0px transparentize($black, 0.8);
  // }
  // &:active,
  // &.active,
  // &:focus {
  //   box-shadow: inset 0px 3px 0px 0px transparentize($black, 0.85);
  // }

  const themeColor = {
    primary: "red",
    secondary: "gray",
    danger: "red",
    success: "green",
    info: "blue",
    warning: "orange",
  }[theme];

  const buttonSizeClasses = {
    sm: "px-2 py-1",
    md: "px-3 py-2",
    lg: "px-4 py-3",
  }[size];

  return (
    <NavLink
      to={to}
      activeClassName="button-active"
      className={
        `rounded-sm inline-block font-medium text-white bg-${themeColor}-600 ${buttonSizeClasses}` +
        className
      }
      style={{ width: `${width}` }}
    >
      {children}
    </NavLink>
  );
}

Button.propTypes = {
  theme: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "info",
    "warning",
  ]),
  width: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  to: PropTypes.string,
};

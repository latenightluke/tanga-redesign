import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// box-shadow: 0 1px 3px 0 transparentize($black, 0.85);
// transition: box-shadow 0.2s;
// &:hover {
//   box-shadow: 0 8px 15px 0 transparentize($black, 0.85);
//   transition: box-shadow 0.2s;
// }
// &:active,
// &.active,
// &:focus {
//   box-shadow: 0 0px 1px 0 transparentize($black, 0.85);
//   transition: none;
// }

export default function ChannelCard({ buyLink = "", image = "", id = 1 }) {
  return (
    <div id={id} className="col-md col-sm-6 mb-3 mb-md-0">
      <NavLink
        to={buyLink}
        className={"inline-block overflow-hidden cursor-pointer  br-sm"}
      >
        <img src={image} className="img-fluid block" alt="" />
      </NavLink>
    </div>
  );
}

ChannelCard.propTypes = {
  buyLink: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
};

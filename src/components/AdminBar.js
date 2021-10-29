import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

export default class AdminBar extends Component {
  render() {
    return (
      <div className="bg-black text-white text-center md:text-left fs-xs py-2 flex justify-between">
        <div className="flex font-normal">
          <div
            className="search-input inline-flex ml-auto m-1"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              placeholder="Search products..."
              className="font-light ml-4"
              style={{ minWidth: "200px", maxWidth: "200px" }}
            />
            <FontAwesomeIcon
              icon="search"
              className="text-sm text-black"
              style={{
                position: "absolute",
                right: "12px",
                top: "9px",
                cursor: "pointer",
              }}
            />
          </div>
          <div
            className="search-input inline-flex ml-auto m-1"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              placeholder="Search orders..."
              className="font-light ml-4"
              style={{ minWidth: "200px", maxWidth: "200px" }}
            />
            <FontAwesomeIcon
              icon="search"
              className="text-sm text-black"
              style={{
                position: "absolute",
                right: "12px",
                top: "9px",
                cursor: "pointer",
              }}
            />
          </div>
          <NavLink
            to="/play/admin/customize"
            activeClassName="text-white"
            className="nav-link text-pebble align-self-center mt-1"
          >
            Customize{" "}
          </NavLink>
          {/* <FaAngleDown className="text-white"/> */}
          {/* <Button theme="secondary" size="sm">Admin Portal <FaLongArrowRight /></Button> */}
        </div>
      </div>
    );
  }
}

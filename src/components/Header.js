import React from "react";
import { NavLink } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import PropTypes from 'prop-types';

import logo from "../assets/logo/white.svg";

import NewsBanner from "./NewsBanner";
import AdminBar from "./AdminBar";

// import FaQuestionCircle from 'react-icons/lib/fa/question-circle';
// import FaAngleDown from 'react-icons/lib/fa/angle-down';
// import FaUser from 'react-icons/lib/fa/user';
// import FaSearch from 'react-icons/lib/fa/search';
// import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';

// .logo {
//   margin-top: 3px;
//   width: 77px;
//   @include media-breakpoint-down(sm) {
//     width: 60px;
//   }
// }
// .search {
//   input {
//     width: 600px;
//     @include media-breakpoint-down(sm) {
//       width: 100%;
//     }
//   }
// }

export default function Header() {
  const isAdmin = false;

  return (
    <div className="fixed top-0 w-full z-50">
      {isAdmin && <AdminBar />}
      <NewsBanner />
      <div className="flex flex-row justify-between items-center bg-red-500 px-md-4 px-3 py-2  text-center md:text-left">
        <NavLink
          to="/"
          className="inline-flex mr-auto text-center md:text-left"
        >
          <img
            className="mt-1"
            style={{ width: "77px" }}
            src={logo}
            alt="Tanga Logo"
          />
        </NavLink>
        <div
          className="flex w-full max-w-2xl mx-auto justify-center items-center"
          style={{ position: "relative" }}
        >
          <input
            type="text"
            placeholder="Search deals..."
            className="px-3 py-1 rounded-full w-full font-light ml-4 focus:border-2 focus:border-red-900"
          />
          <FontAwesomeIcon
            icon="search"
            className="text-red-500 text-sm"
            style={{
              position: "absolute",
              right: "12px",
              top: "9px",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="align-self-center hidden md:flex">
          <a
            href=""
            className="text-white pl-4 flex items-center content-center"
          >
            <FontAwesomeIcon
              icon="question-circle"
              className="mr-2 mb-1 text-sm"
            />
            Support <FontAwesomeIcon icon="angle-down" className="ml-2" />
          </a>
          <a
            href=""
            className="text-white pl-4 flex items-center content-center"
          >
            <FontAwesomeIcon icon="user" className="mr-2 mb-1 text-sm" />
            Account <FontAwesomeIcon icon="angle-down" className="ml-2" />
          </a>
          <a
            href=""
            className="text-white pl-4 flex items-center content-center"
          >
            <FontAwesomeIcon icon="shopping-cart" className="fs-md" />
          </a>
        </div>
      </div>
    </div>
  );
}

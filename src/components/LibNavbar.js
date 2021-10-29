import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import logo from "../assets/logo/red.svg";

// .submenu {
//   list-style: none;
//   padding: 1.5rem;
//   font-size: 16px;
//   padding-left: 3rem;
//   background: $snow;
//   border-bottom: 1px solid $cloud;
//   li {
//     margin-bottom: 0 !important;
//     a {
//       display: block;
//       padding: 0.15rem 0px;
//       color: gray-500;
//       line-height: 2;
//     }
//     &:before {
//       display: none !important;
//     }
//   }
// }

// .active {
//   color: text-gray-700 !important;
// }

export default function LibNavbar() {
  const navItemClasses =
    "text-gray-500 hover:text-gray-600 active:text-gray-700";

  return (
    <div
      className="fixed left-0 bottom-0 top-0 float-left overflow-scroll"
      style={{ width: "17%" }}
    >
      <div className="h-screen w-full bg-white">
        <NavLink to="/" className="bg-white p-4 block bb-1-cloud text-center">
          <img src={logo} className="img-fluid mx-auto" alt="Tanga" />
          <p className="mb-0 fs-14 text-charcoal text-center font-normal">
            Pattern Library
          </p>
        </NavLink>

        <div id="accordion" role="tablist" aria-multiselectable="true">
          <div>
            <div role="tab" id="headingOne">
              <a
                className="px-4 py-3 block bg-white bb-1-cloud fw-6"
                style={{ position: "relative" }}
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Overview{" "}
                <FontAwesomeIcon
                  icon="angle-down"
                  className="text-gray"
                  style={{
                    position: "absolute",
                    right: "1.5rem",
                    top: "19px",
                  }}
                />
              </a>
            </div>
            <ul
              className="collapse show mb-0 bb-1-cloud submenu"
              id="collapseOne"
              role="tabpanel"
              aria-labelledby="headingOne"
            >
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Overview
                </NavLink>
                <NavLink
                  to="/brand-foundations"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Brand Foundations
                </NavLink>
                <NavLink
                  to="/audience-personas"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Audience Personas
                </NavLink>
                <NavLink
                  to="/verbal-strategy"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Verbal Strategy
                </NavLink>
                <NavLink
                  to="/code-guidelines"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Code Guidelines
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div role="tab" id="headingTwo">
              <a
                className="collapsed px-4 py-3 block bg-white bb-1-cloud fw-6"
                style={{ position: "relative" }}
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Design{" "}
                <FontAwesomeIcon
                  icon="angle-down"
                  className="text-gray"
                  style={{
                    position: "absolute",
                    right: "1.5rem",
                    top: "19px",
                  }}
                />
              </a>
            </div>
            <ul
              className="collapse mb-0 bb-1-cloud submenu"
              id="collapseTwo"
              role="tabpanel"
              aria-labelledby="headingTwo"
            >
              <li>
                <NavLink
                  to="/logo-usage"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Logo Usage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/colors"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Colors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/typography"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Typography
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/borders"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Borders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/box-shadows"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Box Shadows
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/utilities"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Utilities
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div role="tab" id="headingThree">
              <a
                className="collapsed px-4 py-3 block bg-white bb-1-cloud fw-6"
                style={{ position: "relative" }}
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Components{" "}
                <FontAwesomeIcon
                  icon="angle-down"
                  className="text-gray"
                  style={{
                    position: "absolute",
                    right: "1.5rem",
                    top: "19px",
                  }}
                />
              </a>
            </div>
            <ul
              className="collapse mb-0 bb-1-cloud submenu"
              id="collapseThree"
              role="tabpanel"
              aria-labelledby="headingThree"
            >
              <li>
                <NavLink
                  to="/buttons"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Buttons
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pill-labels"
                  activeClassName="active"
                  className={navItemClasses}
                >
                  Pill Labels
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="p-3"
            style={{
              position: "absolute",
              bottom: "0px",
              left: "0px",
              right: "0px",
            }}
          >
            <Button to="/play" theme="primary" className="w-100">
              Tanga Playground <FontAwesomeIcon icon="long-arrow-alt-right" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

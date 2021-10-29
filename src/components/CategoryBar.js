import React from "react";
import { NavLink } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import categories from "./categories.json";

// &:first-child {
//   padding-left: 0;
// }
// &:hover {
//   color: $black;
//   text-decoration: none;
//   span {
//     border-bottom: 2px solid $cloud;
//   }
// }
// &:active,
// &.active,
// &:focus {
//   color: $red;
//   text-decoration: none;
//   span {
//     border-bottom: 2px solid $red;
//   }
// }

export default function CategoryBar() {
  return (
    <div
      className="relative bg-white px-md-4 px-0 fs-xs shadow-md"
      style={{ overflow: "hidden", overflowY: "visible", maxWidth: "100%" }}
    >
      <div className="overflow-scroll flex flex-row justify-start">
        {categories.map((category, i) => (
          <NavLink
            to={category.url}
            className={"text-gray-700 inline-block float-left p-4 text-nowrap"}
            key={i}
          >
            <span className={`text-${category.color}`}>
              {category.icon ? (
                <FontAwesomeIcon icon={category.icon} className="fs-xxs mr-2" />
              ) : null}
              {category.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

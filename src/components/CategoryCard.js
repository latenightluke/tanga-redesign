import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// &:active {
//   .image {
//     border: 5px solid darken($red, 10%);
//   }
//   .name {
//     color: darken($red, 10%) !important;
//   }
// }

export default function CategoryCard({
  path = "play/channel",
  image = "",
  name = "Category",
}) {
  return (
    <NavLink to={path} className={"group cursor-pointer col-md-2"}>
      <img
        src={image}
        className="border-3 border-transparent group-hover:border-3 group-hover:border-red-600 img-fluid rounded-circle bs-sm p-3 bg-white"
        alt={name}
      />
      <div className="pt-1 text-black group-hover:text-red-600 fw-bold text-center mt-2 mx-auto">
        {name}
      </div>
    </NavLink>
  );
}

CategoryCard.propTypes = {
  path: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};

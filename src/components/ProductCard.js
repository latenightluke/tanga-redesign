import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

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

// .name {
//   $font-size: 14px;
//   $line-height: 1.3;
//   $lines-to-show: 2;

//   height: $font-size * $line-height * $lines-to-show;
//   font-size: $font-size;
//   line-height: $line-height;
//   -webkit-line-clamp: $lines-to-show;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

export default function ProductCard({
  name,
  buyLink = "/product-page",
  image = "",
  price = "",
  shipping = "",
}) {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
      <NavLink
        to={buyLink}
        className="cursor-pointer block mb-4 bg-white br-sm p-3"
      >
        <div className="relative mb-2">
          {/* <div className={styles.squareBanner + " bg-red fs-xxs p-2"}>
        <div className={styles.squareContent + " px-2"}>
          <div>
            <span className="text-white">You Save 10%!</span>
          </div>
        </div>
      </div> */}
          <img src={image} className="mx-auto img-fluid" alt="" />
        </div>
        <div className="card-container">
          <h6
            className={
              "block mb-0 font-normal fs-xs overflow-hidden overflow-ellipsis"
            }
          >
            {name}
          </h6>
          <div className="fs-xxs text-yellow mb-3">
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" className="mr-1" />
            <span className="text-gray font-light">(125)</span>
          </div>
          <h5 className="fs-md fw-bold text-red mb-0">{price}</h5>
          <p
            className="text-charcoal fs-xxs mb-0 font-normal text-uppercase"
            style={{ marginTop: "-6px" }}
          >
            <FontAwesomeIcon icon="truck" className="mr-1 mb-1" />
            {shipping}
          </p>
        </div>
      </NavLink>
    </div>
  );
}

ProductCard.propTypes = {
  buyLink: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  shipping: PropTypes.string,
};

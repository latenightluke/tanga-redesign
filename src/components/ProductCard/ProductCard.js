import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import styles from "./ProductCard.module.css";

class ProductCard extends Component {
  render() {
    return (
      <div className="col-6 col-sm-4 col-md-3 col-lg-2">
        <NavLink
          to={this.props.buyLink}
          className={styles.card + " d-block mb-4 bg-white br-sm p-3"}
        >
          <div className={styles.imageContainer + " mb-2"}>
            {/* <div className={styles.squareBanner + " bg-red fs-xxs p-2"}>
              <div className={styles.squareContent + " px-2"}>
                <div>
                  <span className="text-white">You Save 10%!</span>
                </div>
              </div>
            </div> */}
            <img src={this.props.image} className="mx-auto img-fluid" alt="" />
          </div>
          <div className="card-container">
            <h6 className={styles.name + " fw-regular fs-xs mb-2"}>
              {this.props.name}
            </h6>
            <div className="fs-xxs text-yellow mb-3">
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" className="mr-1" />
              <span className="text-gray fw-light">(125)</span>
            </div>
            <h5 className="fs-md fw-bold text-red mb-2">{this.props.price}</h5>
            <p
              className="text-charcoal fs-xxs mb-0 fw-regular ls-1 text-uppercase"
              style={{ marginTop: "-6px" }}
            >
              <FontAwesomeIcon icon="truck" className="mr-1" />
              {this.props.shipping}
            </p>
          </div>
        </NavLink>
      </div>
    );
  }
}

ProductCard.propTypes = {
  buyLink: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  shipping: PropTypes.string,
};

ProductCard.defaultProps = {
  buyLink: "/product-page",
  image: "",
  price: "",
  shipping: "",
};

export default ProductCard;

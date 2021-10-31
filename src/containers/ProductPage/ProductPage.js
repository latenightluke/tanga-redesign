import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import styles from "./ProductPage.module.css";

import Button from "../../components/Button/Button";
import MacBookImage from "../../assets/products/macbook.jpg";

class ProductPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="bg-white p-3 p-md-5">
        <ol className="breadcrumb d-flex align-items-center py-2 px-3 mb-5 bg-snow">
          <li className="breadcrumb-item pt-0">
            <a href="">All Categories</a>
          </li>
          <li className="breadcrumb-item">
            <a href="">Electronics</a>
          </li>
          <li className="breadcrumb-item active">Computers</li>
        </ol>
        <div className="row">
          <div className="col-1">
            <img
              className="img-fluid img-thumbnail active"
              src={MacBookImage}
              alt=""
            />
            <img
              className="img-fluid img-thumbnail mt-1"
              src={MacBookImage}
              alt=""
            />
            <img
              className="img-fluid img-thumbnail mt-1"
              src={MacBookImage}
              alt=""
            />
            <img
              className="img-fluid img-thumbnail mt-1"
              src={MacBookImage}
              alt=""
            />
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <img src={MacBookImage} className="img-fluid" alt="" />
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <h4 className="text-charcoal fw-600 mb-0">
              Apple 13.3" MacBook Pro MD101LL/A + FREE CASE (Core i5, 4GB, 500GB
              HDD)
            </h4>
            <p className="mb-4">
              <div className="text-gold fs-14 d-inline-block">
                <FontAwesomeIcon icon="star" className="text-yellow" />
                <FontAwesomeIcon icon="star" className="text-yellow" />
                <FontAwesomeIcon icon="star" className="text-yellow" />
                <FontAwesomeIcon icon="star" className="text-yellow" />
                <FontAwesomeIcon icon="star" className="text-yellow" />
              </div>
              <a href="" className="ml-2 text-gray">
                (1,254 reviews)
              </a>
            </p>
            <div>
              <h3 className="text-red d-inline-block mb-4">$19.99</h3>
              <span className="text-gray fs-xs ml-1 mb-0 d-inline-block fw-regular">
                <s>$34.99</s>
              </span>
            </div>
            <div className="d-block mb-4">
              <label htmlFor="" className="mb-0">
                Quantity
              </label>
              <a
                className={
                  styles.quantityBox +
                  " " +
                  styles.active +
                  " c-pointer user-select-none d-inline-block mr-1"
                }
              >
                1
              </a>
              <a
                className={
                  styles.quantityBox +
                  " c-pointer user-select-none d-inline-block mr-1"
                }
              >
                2
              </a>
              <a
                className={
                  styles.quantityBox +
                  " c-pointer user-select-none d-inline-block mr-1"
                }
              >
                3
              </a>
              <a
                className={
                  styles.quantityBox +
                  " c-pointer user-select-none d-inline-block mr-1"
                }
              >
                4
              </a>
              <a
                className={
                  styles.quantityBox +
                  " c-pointer user-select-none d-inline-block mr-1"
                }
              >
                5
              </a>
            </div>
            <Button theme="primary" className="w-100">
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-8">
            <h4 className="mb-1">Product Details</h4>
            <p className="text-charcoal fs-16 mb-5">
              The white Rolling Spider MiniDrone from Parrot can fly, roll along
              the floor, climb walls, and even traverse the ceiling. It is a
              5.5"-diameter mini quadcopter that includes a pair of removable
              wheels for added fun. No special controller is required – the
              Rolling Spider is operated by a mobile app and your smartphone.
              Simply tilt your device to maneuver the MiniDrone. A sophisticated
              multi-sensor flight computer lets you perform 360s, U-turns,
              flips, barrel rolls, and more without stalling or loosing
              stability. The Rolling Spider has a top speed of around 11 mph and
              a Bluetooth wireless range of about 66’. Amazing Acrobatics Parrot
              Rolling Spider is an ultra-compact drone controlled by smartphone.
              It flies indoors and outdoors with surprising speed and stability.
              Acrobatic tricks are available from the free app for MiniDrones
              FreeFlight 3. 1. Ultra-light, Rolling Spider performs half- and
              u-turns in one swipe. 2. The Rolling Spider does front and rear
              loops in one click. 3. With its removable wheels, it runs from
              floor to ceiling and walls. 4. Equipped with a propeller cutout in
              case of a collision, it is designed to fly without harming your
              living room’s chandelier!
            </p>
            <div className="additional-info mb-5">
              <h4 className="mb-1">Additional Information</h4>
              <p className="text-charcoal fs-16">
                <ul>
                  <li>90 day warranty</li>
                  <li>Refurbished (More info)</li>
                </ul>
              </p>
            </div>
            <div className="additional-info">
              <h4 className="mb-1">Shipping Information</h4>
              <p className="text-charcoal fs-16">
                <ul>
                  <li>Free Shipping!</li>
                  <li>Estimated delivery between Dec 17 - Dec 20.</li>
                  <li>Returns available within 30 days</li>
                  <li>
                    Ships to U.S. (No AK/HI, No P.O. Boxes, and No Military
                    Addresses)
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;

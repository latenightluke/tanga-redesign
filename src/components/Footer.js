import React, { Component } from "react";
import { Container } from "reactstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

// a {
//   &:active,
//   &.active,
//   &:focus {
//     text-decoration: none;
//     color: unset;
//     border-bottom: 2px solid $red;
//   }
// }

export default function Footer() {
  return (
    <div>
      <Container
        fluid
        className="bg-white bt-2-fog py-3 py-md-5 px-3 px-md-5 fs-xs"
      >
        <div className="row">
          <div className="col-12 col-md-3">
            <h6 className="text-sm">About Us</h6>
            <ul className="">
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Our Story
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Why Trust Tanga?
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Meet The Team
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  How Tanga Works
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  About Our Deals
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Read Our Blog
                </a>
              </li>
            </ul>
            <h6 className="text-sm">Subscribe</h6>
            <ul className="list-none">
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  <FontAwesomeIcon icon="envelope" className="mr-2" />
                  Sign Up For Our Emails{" "}
                  <FontAwesomeIcon
                    icon="long-arrow-alt-right"
                    className="ml-1"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h6 className="text-sm">Support</h6>
            <ul className="list-none">
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Customer Support
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Shipping
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Returns & Exchanges
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Rewards Program
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h6 className="text-sm">Work With Us</h6>
            <ul className="list-none">
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Careers
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Press
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Sell With Us
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Affiliates Program
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  RateAdvantage
                </a>
              </li>
            </ul>
            <h6 className="text-sm">Legal</h6>
            <ul className="list-none">
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h6 className="text-sm">Connect With Us</h6>
            <ul className="list-none">
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="mr-1"
                    style={{ width: "15px" }}
                  />
                  Twitter
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  <FontAwesomeIcon
                    icon={["fab", "facebook-f"]}
                    className="mr-1"
                    style={{ width: "15px" }}
                  />
                  Facebook
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="mr-1"
                    style={{ width: "15px" }}
                  />
                  Instagram
                </a>
              </li>
              <li className="font-weight-normal">
                <a href="" className="hover:border-b-2 hover:border-gray-400">
                  <FontAwesomeIcon
                    icon={["fab", "snapchat"]}
                    className="mr-1"
                    style={{ width: "15px" }}
                  />
                  Snapchat
                </a>
              </li>
            </ul>
            <h6 className="text-sm">We Accept</h6>
            <ul className="list-none">
              <li className="font-weight-normal">
                <FontAwesomeIcon
                  icon={["fab", "cc-amex"]}
                  className="fs-md mr-2"
                />
                <FontAwesomeIcon
                  icon={["fab", "cc-mastercard"]}
                  className="fs-md mr-2"
                />
                <FontAwesomeIcon
                  icon={["fab", "cc-visa"]}
                  className="fs-md mr-2"
                />
                <FontAwesomeIcon
                  icon={["fab", "cc-discover"]}
                  className="fs-md"
                />
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container fluid className=" bg-black flex justify-between px-5 py-3">
        <p className="inline-flex mr-auto mb-0 text-pebble text-center fs-xxs">
          &copy; 2018 Tanga.com • United States • All rights reserved.
        </p>
      </Container>
    </div>
  );
}

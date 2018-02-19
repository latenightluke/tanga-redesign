import React, { Component } from 'react';

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="Footer container-fluid bg-white bt-2-fog py-5 px-5 fs-xs">
          <div className="row">
            <div className="col-12 col-md-3">
              <h6 className="fs-sm">About Us</h6>
              <ul className="list-style-none">
                <li><a href="">Our Story</a></li>
                <li><a href="">Why Trust Tanga?</a></li>
                <li><a href="">Meet The Team</a></li>
                <li><a href="">How Tanga Works</a></li>
                <li><a href="">About Our Deals</a></li>
                <li><a href="">Read Our Blog</a></li>
              </ul>
              <h6 className="fs-sm">Subscribe</h6>
              <ul className="list-style-none">
                <li><a href=""><i className="fa fa-envelope-o mr-2"></i>Sign Up For Our Emails<i className="fa fa-long-arrow-right ml-2"></i></a></li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <h6 className="fs-sm">Support</h6>
              <ul className="list-style-none">
                <li><a href="">Customer Support</a></li>
                <li><a href="">Shipping</a></li>
                <li><a href="">Returns & Exchanges</a></li>
                <li><a href="">Rewards Program</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <h6 className="fs-sm">Work With Us</h6>
              <ul className="list-style-none">
                <li><a href="">Careers</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Sell With Us</a></li>
                <li><a href="">Affiliates Program</a></li>
                <li><a href="">RateAdvantage</a></li>
              </ul>
              <h6 className="fs-sm">Legal</h6>
              <ul className="list-style-none">
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Use</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <h6 className="fs-sm">Social</h6>
              <ul className="list-style-none">
                <li><a href=""><i className="fa fa-twitter fa-large mr-2" style={{width: "15px"}}></i>Twitter</a></li>
                <li><a href=""><i className="fa fa-facebook fa-large mr-2" style={{width: "15px"}}></i>Facebook</a></li>
                <li><a href=""><i className="fa fa-instagram fa-large mr-2" style={{width: "15px"}}></i>Instagram</a></li>
                <li><a href=""><i className="fa fa-snapchat-ghost fa-large mr-2" style={{width: "15px"}}></i>Snapchat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="FooterBanner container-fluid bg-black d-flex justify-content-between px-5 py-2">
          <p className="d-inline-flex mr-auto mb-0 text-white-25 fs-xxs">&copy; 2018 Tanga.com • United States • All rights reserved.</p>
          <p className="d-inline-flex ml-auto mb-0"><i className="fa fa-cc-amex fa-lg mr-2"></i><i className="fa fa-cc-mastercard fa-lg mr-2"></i><i className="fa fa-cc-visa fa-lg mr-2"></i><i className="fa fa-cc-discover fa-lg"></i></p>
        </div>
      </div>
    );
  }
}

export default Footer;

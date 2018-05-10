import React, { Component } from 'react';
import { Container } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import styles from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <Container fluid className={styles.footer + " bg-white bt-2-fog py-3 py-md-5 px-3 px-md-5 fs-xs"}>
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
                <li><a href=""><FontAwesomeIcon icon="envelope" className="mr-2" />Sign Up For Our Emails <FontAwesomeIcon icon="long-arrow-alt-right" className="ml-1" /></a></li>
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
              <h6 className="fs-sm">Connect With Us</h6>
              <ul className="list-style-none">
                <li><a href=""><FontAwesomeIcon icon={['fab', 'twitter']} className="mr-1" style={{width: "15px"}} />Twitter</a></li>
                <li><a href=""><FontAwesomeIcon icon={['fab', 'facebook-f']} className="mr-1" style={{width: "15px"}} />Facebook</a></li>
                <li><a href=""><FontAwesomeIcon icon={['fab', 'instagram']} className="mr-1" style={{width: "15px"}} />Instagram</a></li>
                <li><a href=""><FontAwesomeIcon icon={['fab', 'snapchat']} className="mr-1" style={{width: "15px"}} />Snapchat</a></li>
              </ul>
              <h6 className="fs-sm">We Accept</h6>
              <ul className="list-style-none">
                <li>
                  <FontAwesomeIcon icon={['fab', 'cc-amex']} className="fs-md mr-2" />
                  <FontAwesomeIcon icon={['fab', 'cc-mastercard']} className="fs-md mr-2" />
                  <FontAwesomeIcon icon={['fab', 'cc-visa']} className="fs-md mr-2" />
                  <FontAwesomeIcon icon={['fab', 'cc-discover']} className="fs-md" />
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <Container fluid className={styles.footerBanner + " bg-black d-flex justify-content-between px-5 py-2"}>
          <p className="d-inline-flex mr-auto mb-0 text-pebble text-center fs-xxs">
            &copy; 2018 Tanga.com • United States • All rights reserved.
          </p>
        </Container>
      </div>
    );
  }
}

export default Footer;

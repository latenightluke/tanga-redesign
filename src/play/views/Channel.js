import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from '../views/Section';
import ProductCard from '../components/ProductCard';
import FeaturedProductCard from '../components/FeaturedProductCard';
import ChannelHeaderImage from '../../assets/channel-header-4.png';

import Button from '../components/Button';

import './Channel.css';

class Channel extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <div className="ChannelHeader p-3 p-md-5">
          <img src={ChannelHeaderImage} className="img-fluid mb-5" alt=""/>
          <div className="p-5 bg-white bs-sm br-sm mb-5">
            <div className="row">
              <FeaturedProductCard
                headerText="MacBooks from $169"
                image="https://tanga2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2F4910ad6d348e.jpeg?ixlib=rails-2.1.1&w=1270&h=1270&auto=format%2Ccompress&cs=srgb&s=4b34000794a89b3c2b699eb3602cc7b8"
                ctaText="Shop MacBooks"
              />
              <div className="col-1"></div>
              <FeaturedProductCard
                headerText="iPads from $99"
                image="https://tanga1.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-fetched-images-prod%2F764a24f0-b5b8-11e7-9941-d525667da7ac.jpg?ixlib=rails-2.1.1&w=1270&h=1270&auto=format%2Ccompress&cs=srgb&s=02f4569c9c56287b8cac7a0172d0ffe5"
                ctaText="Shop iPads"
              />
              <div className="col-1"></div>
              <FeaturedProductCard
                headerText="iPhones from $49"
                image="https://tanga2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2F68e26852de68.jpeg?ixlib=rails-2.1.1&w=1270&h=1270&auto=format%2Ccompress&cs=srgb&s=1aa925e06ef630df0915fa438d8a4262"
                ctaText="Shop iPhones"
              />
            </div>
          </div>
          <Section name="Here's Some Crazy Products">
            <ProductCard
              image="https://tanga1.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2F6480eeb1bace.png?ixlib=rails-2.1.1&w=1270&h=1270&auto=format%2Ccompress&cs=srgb&s=b5ceca16b7805ccf977cc27faefce894"
              name={"Apple 11.6\" MacBook Air MC968LLA Intel Core i5"}
              price="$549.23"
              shipping="Free Shipping"
            />
            <ProductCard
              image="https://tanga2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2Ffc79d08c12dc.jpeg?ixlib=rails-2.1.1&w=1270&h=1270&auto=format%2Ccompress&cs=srgb&s=846ebd6143c337e9d3fb21e87ce3d20c"
              name="Vivere Original Dream Rocker"
              price="$549.23"
              shipping="Free Shipping"
            />
            <ProductCard
              image="https://tanga1.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2F53fd6230e82f.jpeg?ixlib=rails-2.1.1&w=1270&h=1270&auto=format%2Ccompress&cs=srgb&s=a25eb5ef222febe133a8c5f922d034da"
              name="4-Piece Super Soft 1800 Series Bamboo Fiber Bed Sheets"
              price="$549.23"
              shipping="Free Shipping"
            />
             <ProductCard
              image="https://tanga2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-fetched-images-prod%2Fbe523440-eb32-11e7-8c1b-2d203daf72a4.jpg?ixlib=rails-2.1.1&w=1270&h=1270&auto=format%2Ccompress&cs=srgb&s=fa53c56568c6b2f56ac0696ee044d7fe"
              name="Apple iPhone 5S Silver 16GB T-Mobile Smartphone (Brand New)"
              price="$549.23"
              shipping="Free Shipping"
            />
            <ProductCard
              image="https://tanga3.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-fetched-images-prod%2F0e092ab0-e1ed-11e7-93dc-9d6ad16f3793.jpg?ixlib=rails-2.1.1&w=1270&h=1270&auto=format%2Ccompress&cs=srgb&s=4bead480451109a5b6a650fe875d47d0"
              name="Acer Chromebook C720 (Intel 1.4 GHz, 4GB, Webcam, 16GB SSD) - Grade B"
              price="$549.23"
              shipping="Free Shipping"
            />
            <ProductCard
              image="https://tanga3.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2F91357a09dda6.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=b2a344dfe0cdb0e6d9ff1da786ca4649"
              name={"Apple 11.6\" MacBook Air MC968LLA Intel Core i5"}
              price="$549.23"
              shipping="Free Shipping"
            />
          </Section>
        </div>
      </div>
    );
  }
}

Channel.propTypes = {
  headerImage: PropTypes.string,
  price: PropTypes.string,
  shipping: PropTypes.string
}

Channel.defaultProps = {
  buyLink: "/play/product-page",
  image: "",
  price: "",
  shipping: ""
}


export default Channel;

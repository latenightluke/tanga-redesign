import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from '../views/Section';
import ProductCard from '../components/ProductCard';
import ChannelCard from '../components/ChannelCard';

import ChannelOne from '../../assets/channel-1.png';
import ChannelTwo from '../../assets/channel-2.png';
import ChannelThree from '../../assets/channel-3.png';
import ChannelHeaderTwo from '../../assets/channel-header-2.png';

import './FrontPage.css';

class FrontPage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <img src={ChannelHeaderTwo} className="img-fluid" alt=""/>
        <div className="FrontPage p-3 p-md-5">
          <Section name="Featured Deals">
            <ProductCard
              image="https://tanga2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2F4910ad6d348e.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=7f7936525edb88c83301a4f145cf12c6"
              name={"Apple 11.6\" MacBook Air MC968LLA Intel Core i5"}
              price="$549.23"
              shipping="Free Shipping"
            />
            <ProductCard
              image="https://tanga3.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2Fe5fa30c80207.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=f58c516fea185c779241e439acd49bf6"
              name={"Apple 11.6\" MacBook Air MC968LLA Intel Core i5"}
              price="$549.23"
              shipping="Free Shipping"
            />
            <ProductCard
              image="https://tanga2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2F0c9fc3a1fa36.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=344404a58c18441473888eaad09b6b19"
              name={"Apple 11.6\" MacBook Air MC968LLA Intel Core i5"}
              price="$549.23"
              shipping="Free Shipping"
            />
             <ProductCard
              image="https://tanga3.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2Fe02fb8788db9.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=7dbe63ab8a569289c3004f61d831fa51"
              name={"Apple 11.6\" MacBook Air MC968LLA Intel Core i5"}
              price="$549.23"
              shipping="Free Shipping"
            />
            <ProductCard
              image="https://tanga3.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2Ffd856c0830df.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=53b8f5981584a952dcbd686a5993baa6"
              name={"Apple 11.6\" MacBook Air MC968LLA Intel Core i5"}
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
          <Section name="Hurry! Going Fast Sales!">
            <ChannelCard image={ChannelOne} />
            <ChannelCard image={ChannelTwo} />
            <ChannelCard image={ChannelThree} />
          </Section>
          <Section name="Our Top Categories">
            <div className="col-md-2">
              <img src="https://tanga3.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2F91357a09dda6.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=b2a344dfe0cdb0e6d9ff1da786ca4649" className="img-fluid rounded-circle bs-sm p-3 bg-white" alt=""/>
              <div className="text-black fw-bold text-center mt-2">Electronics</div>
            </div>
            <div className="col-md-2">
              <img src="https://tanga3.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2Fe02fb8788db9.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=7dbe63ab8a569289c3004f61d831fa51" className="img-fluid rounded-circle bs-sm p-3 bg-white" alt=""/>
              <div className="text-black fw-bold text-center mt-2">Household</div>
            </div>
            <div className="col-md-2">
              <img src="https://tanga2.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Ftanga-images%2F4910ad6d348e.jpeg?ixlib=rails-2.1.1&fit=crop&w=500&h=500&auto=format%2Ccompress&cs=srgb&s=7f7936525edb88c83301a4f145cf12c6" className="img-fluid rounded-circle bs-sm p-3 bg-white" alt=""/>
              <div className="text-black fw-bold text-center mt-2">Laptops</div>
            </div>
            <div className="col-md-2">
              <img src="https://s3.amazonaws.com/tanga-images/51f5894acba8.jpeg" className="img-fluid rounded-circle bs-sm p-3 bg-white" alt=""/>
              <div className="text-black fw-bold text-center mt-2">Men</div>
            </div>
          </Section>
        </div>
      </div>
    );
  }
}

export default FrontPage;

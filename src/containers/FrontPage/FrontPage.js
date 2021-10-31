import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Section from '../Section/Section';

import ProductCard from '../../components/ProductCard/ProductCard';
import ChannelCard from '../../components/ChannelCard/ChannelCard';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

import ChannelOne from '../../assets/channel-1.png';
import ChannelTwo from '../../assets/channel-2.png';
import ChannelThree from '../../assets/channel-3.png';
import ChannelHeaderTwo from '../../assets/channel-header-2.png';

import MacBookImage from '../../assets/products/macbook.jpg';

class FrontPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <NavLink
          to="/blog"
          className="d-block bb-2-fog"
          style={{ overflow: 'hidden' }}
        >
          <img src={ChannelHeaderTwo} className="img-fluid" alt="" />
        </NavLink>
        <div className="FrontPage p-3 p-md-5 bt-2-white">
          <Section name="Featured Deals">
            <ProductCard
              image={MacBookImage}
              name='Apple 13.3" MacBook Pro MD101LL/A + FREE CASE (Core i5, 4GB, 500GB HDD)'
              price="$549.23"
              shipping="Free Shipping"
              buyLink="/product-page"
            />
            <ProductCard
              image={MacBookImage}
              name='Apple 13.3" MacBook Pro MD101LL/A + FREE CASE (Core i5, 4GB, 500GB HDD)'
              price="$549.23"
              shipping="Free Shipping"
            />
            <ProductCard
              image={MacBookImage}
              name='Apple 13.3" MacBook Pro MD101LL/A + FREE CASE (Core i5, 4GB, 500GB HDD)'
              price="$549.23"
              shipping="Free Shipping"
            />
            <ProductCard
              image={MacBookImage}
              name='Apple 13.3" MacBook Pro MD101LL/A + FREE CASE (Core i5, 4GB, 500GB HDD)'
              price="$549.23"
              shipping="Free Shipping"
            />
            <ProductCard
              image={MacBookImage}
              name='Apple 13.3" MacBook Pro MD101LL/A + FREE CASE (Core i5, 4GB, 500GB HDD)'
              price="$549.23"
              shipping="Free Shipping"
            />
            <ProductCard
              image={MacBookImage}
              name='Apple 13.3" MacBook Pro MD101LL/A + FREE CASE (Core i5, 4GB, 500GB HDD)'
              price="$549.23"
              shipping="Free Shipping"
            />
          </Section>
          <Section name="Hurry! Going Fast Sales!">
            <ChannelCard image={ChannelOne} />
            <ChannelCard image={ChannelTwo} />
            <ChannelCard image={ChannelThree} />
            <ChannelCard image={ChannelOne} />
          </Section>
          <Section name="Shop Our Top Categories">
            <CategoryCard
              image="https://s3.amazonaws.com/tanga-images/5d0293d56ad5.jpeg"
              name="Computers/Tablets & Networking"
            />
            <CategoryCard
              image="https://s3.amazonaws.com/tanga-images/a322917c17c3.jpeg"
              name="Art"
            />
            <CategoryCard
              image="https://s3.amazonaws.com/tanga-images/8e52c0b6be1a.jpeg"
              name="Baby"
            />
            <CategoryCard
              image="https://s3.amazonaws.com/tanga-images/b78e8f8bdc14.jpeg"
              name="Books"
            />
            <CategoryCard
              image="https://s3.amazonaws.com/tanga-images/5cb6bd4d312e.jpeg"
              name="Camera & Photo"
            />
            <CategoryCard
              image="https://s3.amazonaws.com/tanga-images/b64086455e89.jpeg"
              name="Cell Phones & Accessories"
            />
          </Section>
        </div>
      </div>
    );
  }
}

export default FrontPage;

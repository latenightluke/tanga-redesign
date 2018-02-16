import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import ProductSection from './views/ProductSection';
import ProductCard from './components/ProductCard';

class Play extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <Header />
        <CategoryBar />
        <ProductSection name="Featured Deals">
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
        </ProductSection>
      </div>
    );
  }
}

export default Play;

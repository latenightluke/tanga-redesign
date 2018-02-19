import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Blog.css';

class Blog extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="Blog p-3 p-md-5">
        <h1 className="text-center mb-0">Welcome To The New Face of Tanga</h1>
        <a href="" className="text-center d-block">By Jeremy Young</a>
      </div>
    );
  }
}

Blog.propTypes = {
  headerImage: PropTypes.string,
  price: PropTypes.string,
  shipping: PropTypes.string
}

Blog.defaultProps = {
  buyLink: "/play/product-page",
  image: "",
  price: "",
  shipping: ""
}


export default Blog;

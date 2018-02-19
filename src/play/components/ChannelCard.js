import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import FaStar from 'react-icons/lib/fa/star';
import FaTruck from 'react-icons/lib/fa/truck';

import './ChannelCard.css';

class ChannelCard extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="col-12 col-md-3">
        <NavLink to={this.props.buyLink} className="ChannelCard br-sm">
          <img src={this.props.image} className="img-fluid d-block" alt=""/>
        </NavLink>
      </div>
    );
  }
}

ChannelCard.propTypes = {
  buyLink: PropTypes.string,
  image: PropTypes.string
}

ChannelCard.defaultProps = {
  buyLink: "/play/channel",
  image: ""
}


export default ChannelCard;

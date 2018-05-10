import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import './ChannelCard.css';

class ChannelCard extends Component {
  render() {
    return (
      <div className="col-md col-sm-6 mb-3 mb-md-0">
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

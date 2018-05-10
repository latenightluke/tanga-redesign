import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './ChannelCard.module.css';

class ChannelCard extends Component {
  render() {
    return (
      <div className="col-md col-sm-6 mb-3 mb-md-0">
        <NavLink to={this.props.buyLink} className={styles.base + " br-sm"}>
          <img src={this.props.image} className="img-fluid d-block" alt=""/>
        </NavLink>
      </div>
    );
  }
}

ChannelCard.propTypes = {
  buyLink: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number
}

ChannelCard.defaultProps = {
  buyLink: "",
  image: "",
  id: 1
}


export default ChannelCard;

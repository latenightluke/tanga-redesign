import React, { Component } from 'react';

import styles from './LibContent.module.css';

class Content extends Component {
  render() {
    return (
      <div className={styles.content + ' bl-1-cloud bg-white'}>
        <div className="container-fluid p-5">
          <div className="container p-5"></div>
        </div>
      </div>
    );
  }
}

export default Content;

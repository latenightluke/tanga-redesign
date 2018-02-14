import React, { Component } from 'react';
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles/styles.scss';

class TangaLibrary extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container-fluid px-0">
        </div>
      </HashRouter>
    )
  }
}

render(<TangaLibrary/>, document.querySelector('#root'))

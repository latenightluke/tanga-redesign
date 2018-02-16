import React, { Component } from 'react';
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Library from './library/Library';
import Play from './play/Play';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles/styles.css';

class TangaLibrary extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/"  component={Library} />
          <Route path="/play" component={Play} />
        </Switch>
      </HashRouter>
    )
  }
}

render(<TangaLibrary/>, document.querySelector('#root'))

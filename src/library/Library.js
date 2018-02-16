import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Content from './components/Content';

class Library extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <div className="bl-1-cloud">
          <div className="container-fluid p-5">
            <div className="container p-5">
              <Navbar/>
              <Content/>
              {/* <Switch>
                <Route path={`${match.url}/content`} component={Content} />
              </Switch> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Library;

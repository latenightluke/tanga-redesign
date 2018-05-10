import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import LibNavbar from '../components/LibNavbar/LibNavbar';
import LibContent from '../components/LibContent/LibContent';

class Library extends Component {
  render() {
    return (
      <Container fluid className="px-0">
        <div className="bl-1-cloud">
          <Container fluid className="p-5">
            <Container className="p-5">
              <LibNavbar />
              <LibContent />
              <Switch>
                <Route path="/library" component={LibContent} />
              </Switch>
            </Container>
          </Container>
        </div>
      </Container>
    );
  }
}

export default Library;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from '../components/Header/Header';
import CategoryBar from '../components/CategoryBar/CategoryBar';
import Footer from '../components/Footer/Footer';

import FrontPage from '../containers/FrontPage/FrontPage';
import ProductPage from '../containers/ProductPage/ProductPage';
import Channel from '../containers/Channel/Channel';
import Blog from '../containers/Blog/Blog';

export default class  extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Container fluid className="px-0" style={{minHeight: "1200px"}}>
          <Header />
          <div style={{height: "84px"}}></div>
          <CategoryBar />
          <Container fluid className="p-0">
            <Switch>
              <Route exact path={`${match.url}`} component={FrontPage}></Route>
              <Route path={`${match.url}product-page`} component={ProductPage}></Route>
              <Route path={`${match.url}deals/:id`} component={Channel}></Route>
              <Route path={`${match.url}blog`} component={Blog}></Route>
            </Switch>
          </Container>
        </Container>
        <Footer/>
      </div>
    );
  }
}

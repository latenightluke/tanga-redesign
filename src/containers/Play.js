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

class Play extends Component {
  render() {
    return (
      <div>
        <Container fluid className="px-0" style={{minHeight: "1200px"}}>
          <Header />
          <div style={{height: "84px"}}></div>
          <CategoryBar />
          <Container fluid className="p-0">
            <Switch>
              <Route exact path="/" component={FrontPage}></Route>
              <Route path="/play/product-page" component={ProductPage}></Route>
              <Route path="/play/channel" component={Channel}></Route>
              <Route path="/play/blog" component={Blog}></Route>
              {/* <Route path="/play/admin/customize" component={Customize}></Route> */}
            </Switch>
          </Container>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Play;

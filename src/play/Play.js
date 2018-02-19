import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import FrontPage from './views/FrontPage';
import ProductPage from './views/ProductPage';
import Channel from './components/Channel';
import CategoryBar from './components/CategoryBar';
import Footer from './components/Footer';

class Play extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <Header />
        <div style={{height: "91px"}}></div>
        <CategoryBar />
        <div className="container-fluid p-0">
          <Switch>
            <Route exact path="/play" component={FrontPage}></Route>
            <Route path="/play/product-page" component={ProductPage}></Route>
            <Route path="/play/channel" component={Channel}></Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Play;

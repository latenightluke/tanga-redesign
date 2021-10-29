import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";

import FrontPage from "../containers/FrontPage/FrontPage";
import ProductPage from "../containers/ProductPage/ProductPage";
import Channel from "../containers/Channel/Channel";
import Blog from "../containers/Blog/Blog";

export default class extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <div className="px-0" style={{ minHeight: "1200px" }}>
          <Header />
          <div style={{ height: "80px" }}></div>
          <CategoryBar />
          <div>
            <Switch>
              <Route exact path={`${match.url}`} component={FrontPage}></Route>
              <Route
                path={`${match.url}product-page`}
                component={ProductPage}
              ></Route>
              <Route path={`${match.url}deals/:id`} component={Channel}></Route>
              <Route path={`${match.url}blog`} component={Blog}></Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

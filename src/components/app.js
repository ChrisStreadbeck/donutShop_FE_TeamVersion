import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RenderDonuts from "../actions/render-donuts";
import Navigation from "../pages/navigation";
import Login from "../pages/login";

import Navbar from "./navbar.js";
import DonutItem from "./donut-item.js";

import "../style/main.scss";

export default class App extends Component {
  render() {
    return (

      <div className="app-wrapper">
        
              <div className="navbar">
      <Navbar />
          <div className="logo">
            <img src="/assets/logo/donut_logo.png" />
          </div>
          <Router>
            <div>
              <Navigation />
              <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
              </Switch>
            </div>
          </Router>

          <button>shopping cart</button>
        </div>

      
      
      <div className="showcase-wapper">     
  

        <RenderDonuts />

        </div>

      </div>
    );
  }
}

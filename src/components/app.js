import React, { Component } from "react";

import RenderDonuts from "../actions/render-donuts";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navbar">
          <div className="logo">
            <img src="/assets/logo/donut_logo.png" />
          </div>
          <button>shopping cart</button>
        </div>

        <RenderDonuts />

        <div className="main-wapper"></div>
      </div>
    );
  }
}

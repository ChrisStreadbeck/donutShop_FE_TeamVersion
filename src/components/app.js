import React, { Component } from "react";

import Navbar from "./navbar.js";
import DonutItem from "./donut-item.js";

import "../style/main.scss";

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Navbar />
        <div className="showcase-wapper">
          <DonutItem />
          <div className="info-one">info</div>
        </div>
      </div>
    );
  }
}

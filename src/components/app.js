import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navibar">
          navibar
          <div className="logo" />
          <button>shopping cart</button>
        </div>

        <div className="main-wapper">
          <div className="title-one">title</div>
          <dic className="image-one">imageone</dic>
          <div className="price-one">price</div>
          <button>BUY1</button>
          <div className="info-one">info</div>
        </div>
      </div>
    );
  }
}

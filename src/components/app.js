import React, { Component } from "react";

import RenderDonuts from "../actions/render-donuts";

import Navbar from "./navbar.js";

import "../style/main.scss";

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="nav-wrapper">
          <Navbar />
        </div>

        <div className="text-wrapper">
          <p>
            You get a flat, and under the carpet in the trunk is one of those
            "donut" (or "temporary") spare tires – skinnier than the tires on
            your car, with a prominent warning about maximum speed on the side.
            You're probably wondering how long you can drive on it before you
            get your other tire repaired at a reputable shop. We're here to
            help. The best place to start is your owner's manual, which should
            list the exact recommended mileage for the spare tire. If you don't
            have a manual, 70 miles is the rule of thumb. These tires are not
            designed for long-range service. They are made to get you to a
            garage to have your tire either repaired or replaced. Driving on it
            for an extended period of time under regular driving conditions will
            result in a blowout in short order, so get a safe tire on your car
            immediately. Maybe you can find a reasonably priced used tire if it
            has to be replaced.
          </p>
        </div>
        <div className="donut-wrapper">
          <RenderDonuts />
        </div>
      </div>
    );
  }
}

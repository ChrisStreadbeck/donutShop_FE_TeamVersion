import React from "react";
import { A } from "hookrouter";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="logo">
          <img src="/assets/logo/your_car_needs_a_donut.jpg" alt="LOGO" />
        </div>
        <A href="/">Home</A>
        <A href="/form">Form</A>
      </div>
      <div className="right-side">
        <div className="btn">
          <button className="cart">shopping cart</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

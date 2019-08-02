import React from "react";
import { A } from "hookrouter";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <img src="/assets/logo/your_car_needs_a_donut.jpg" alt="LOGO" />
      </div>
      <div div className="links">
        <A href="/">Home</A>
        <A href="/form">Form</A>
      </div>

      <div className="cart">
        <button className="btn">shopping cart</button>
      </div>
    </div>
  );
};

export default Navbar;

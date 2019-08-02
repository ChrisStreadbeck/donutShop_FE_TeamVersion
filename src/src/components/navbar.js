import React from "react";
import { A } from "hookrouter";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <img src="/assets/logo/your_car_needs_a_donut.jpg" alt="LOGO" />
      </div>
      <div div className="links">
        <div classID="home">
          <A href="/">Home</A>
        </div>
        <div classID="form">
          <A href="/form">Form</A>
        </div>
      </div>

      <div className="btn">
        <button className="cart">shopping cart</button>
      </div>
    </div>
  );
};

export default Navbar;

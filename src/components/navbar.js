import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/logo/your_car_needs_a_donut.jpg" alt="LOGO" />
      </div>
      <div className="btn">
        <button className="cart">shopping cart</button>
      </div>
    </div>
  );
};
export default Navbar;

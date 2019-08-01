import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavLinks from "./nav-links.js";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo" />
      <button className="btn-cart">shopping cart</button>
    </div>
  );
};
export default Navbar;

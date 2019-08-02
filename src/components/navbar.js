import React from "react";
import { useRoutes, A } from "hookrouter";

const routes = {
  "/": () => <App />,
  "/form": () => <DonutForm />
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <A href="/">Home</A>
        <A href="/form">Form</A>

        {useRoutes(routes)}
      </div>
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

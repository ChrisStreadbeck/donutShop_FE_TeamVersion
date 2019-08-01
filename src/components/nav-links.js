import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="nav-links">
      <NavLink exact to="/" activeClassName="nav-link-active">
        HOME
      </NavLink>

      <NavLink exact to="/login" activeClassName="nav-link-active">
        LOGIN
      </NavLink>
    </div>
  );
};

export default withRouter(NavLinks);

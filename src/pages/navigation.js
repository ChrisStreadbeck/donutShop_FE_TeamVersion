import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-wrapper">
        <div className="homepage-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            HOME
          </NavLink>
        </div>
        <div className="login-button-wrapper">
          <NavLink exact to="/login" activeClassName="nav-link-active">
            LOGIN
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);

import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";

import App from "./components/app";
import Login from "./pages/login";
import DonutForm from "./pages/donut-form";

import "./style/main.scss";

const routes = {
  "/": () => <App />,
  "/login": () => <Login />,
  "/form": () => <DonutForm />
};

function Main() {
  return (
    <div>
      <div className="navbar">
        <A href="/">Home</A>
        <A href="/login">Login</A>
        <A href="/form">Form</A>
      </div>
      {useRoutes(routes)}
    </div>
  );
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"));

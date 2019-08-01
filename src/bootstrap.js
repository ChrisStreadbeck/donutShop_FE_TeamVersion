import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";

import App from "./components/app";
import DonutForm from "./pages/donut-form";

import "./style/main.scss";

const routes = {
  "/": () => <App />,
  "/form": () => <DonutForm />
};

function Main() {
  return (
    <div>
      <div className="navbar">
        <A href="/">Home</A>
        <A href="/form">Form</A>
      </div>
      {useRoutes(routes)}
    </div>
  );
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"));

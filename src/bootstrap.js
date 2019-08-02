import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";

import Navbar from "./components/navbar";
import App from "./components/app";
import DonutForm from "./pages/donut-form";

import "./style/main.scss";

const routes = {
  "/": () => <App form={false} />,
  "/form": () => <DonutForm form={true} />
};

function Main() {
  return (
    <div className="body">
      <Navbar />
      {useRoutes(routes)}
    </div>
  );
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"));

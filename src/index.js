import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App";
import AppModel from "./app.model";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/**
 * @description: it's for cypress dispatching app actions from tests
 */
if (window.Cypress) {
  window.model = new AppModel();
}

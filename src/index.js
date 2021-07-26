import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import AppModel from "./app.model";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const model = new AppModel();

if (window.Cypress) {
  window.model = model;
}

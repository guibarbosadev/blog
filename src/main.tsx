import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import initI18n from "./initI18n";

initI18n();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

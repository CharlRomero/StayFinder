import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/style.scss";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
//import "./App.js";

// ReactDOM.render(
//     <>
//     <App />
//     </>
//     ,
// document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

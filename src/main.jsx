import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// import AOS library
import "aos/dist/aos.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MoviesContextProvider } from "./store/movies-context";
import "./index.css";

ReactDOM.render(
  <MoviesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoviesContextProvider>,
  document.getElementById("root")
);

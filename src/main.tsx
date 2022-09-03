import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

ReactDOM.createRoot(document.querySelector(`#root`) as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

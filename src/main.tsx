import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./main.css";
import App from "./App";
import GlobalProvider from "./context/GlobalContext";

ReactDOM.createRoot(document.querySelector(`#root`) as HTMLElement).render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>
);

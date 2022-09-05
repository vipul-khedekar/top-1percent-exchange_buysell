import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./main.css";
import App from "./App";
import GlobalProvider from "./context/GlobalContext";
import { reducer } from "./context/reducer";
import { initialState } from "./context/initialState";

ReactDOM.createRoot(document.querySelector(`#root`) as HTMLElement).render(
  <BrowserRouter>
    <GlobalProvider reducer={reducer} initialState={initialState}>
      <App />
    </GlobalProvider>
  </BrowserRouter>
);

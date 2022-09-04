import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./main.css";
import App from "./App";
import { GlobalProvider } from "./context/GlobalContext";
import { initialState } from "./context/initialState";
import { reducer } from "./context/reducer";

ReactDOM.createRoot(document.querySelector(`#root`) as HTMLElement).render(
  <BrowserRouter>
    <GlobalProvider initialState={initialState} reducer={reducer}>
      <App />
    </GlobalProvider>
  </BrowserRouter>
);

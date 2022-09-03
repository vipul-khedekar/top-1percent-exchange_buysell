import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Buy from "./Buy";
import Sell from "./Sell";
import Error from "./Error";

function Pages() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/buy"} element={<Buy />} />
      <Route path={"/sell"} element={<Sell />} />
      <Route path={"/*"} element={<Error />} />
    </Routes>
  );
}

export default Pages;

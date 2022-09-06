import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Error from "./Error";
import Buy from "./Buy";
import Sell from "./Sell";
import Cart from "./Cart";

function Pages() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/store/buy"} element={<Buy />} />
      <Route path={"/store/sell"} element={<Sell />} />
      <Route path={"/cart"} element={<Cart />} />
      <Route path={"/*"} element={<Error />} />
    </Routes>
  );
}

export default Pages;

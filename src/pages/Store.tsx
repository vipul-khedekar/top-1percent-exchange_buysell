import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sell from "./Sell";
import Buy from "./Buy";

function Body() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/store/buy"} element={<Buy />} />
        <Route path={"/store/sell"} element={<Sell />} />
      </Routes>
    </div>
  );
}

export default Body;

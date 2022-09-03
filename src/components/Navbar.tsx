import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <NavLink to={"/store/buy"}>Buy</NavLink>
      <NavLink to={"/store/sell"}>Sell</NavLink>
    </header>
  );
}

export default Navbar;

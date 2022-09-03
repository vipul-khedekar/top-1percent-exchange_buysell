import { IoCartOutline, IoDiamondSharp } from "react-icons/io5";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="h-8 flex justify-between items-center gap-20 my-5 relative">
      <NavLink
        className="w-1 flex justify-center items-center gap-2 flex-auto text-xl hover:text-2xl"
        to={"/"}
      >
        <IoDiamondSharp />
        <p>Home</p>
      </NavLink>

      <NavLink
        className="w-1 flex justify-center items-center flex-auto text-xl hover:text-2xl"
        to={"/store/buy"}
      >
        <p>Buy</p>
      </NavLink>

      <NavLink
        className="w-1 flex justify-center items-center flex-auto text-xl hover:text-2xl"
        to={"/store/sell"}
      >
        <p>Sell</p>
      </NavLink>

      <NavLink
        className="w-1 flex justify-center items-center flex-auto text-3xl hover:text-4xl"
        to={"/cart"}
      >
        <IoCartOutline />
      </NavLink>
    </header>
  );
}

export default Navbar;

import { NavLink } from "react-router-dom";
import { IoCartOutline, IoDiamondSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

import { AddItemState } from "../store/reducers/addItemReducer";

function Navbar() {
  const quantity = useSelector<AddItemState, AddItemState[`quantity`]>(
    (state) => {
      return state.quantity;
    }
  );

  return (
    <nav className="h-[9vh] w-full bg-semiLightBlack flex justify-between items-center gap-20 my-5 fixed -top-6 left-0 z-10 shadow-black shadow-sm">
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
        <div className="relative">
          <IoCartOutline />
          <div className="bg-gold text-black h-4 w-6 flex justify-center items-center rounded-full absolute bottom-5 left-7 font-bold text-sm">
            <p>{quantity}</p>
          </div>
        </div>
      </NavLink>
    </nav>
  );
}

export default Navbar;

import { NavLink } from "react-router-dom";
import { IoCartOutline, IoDiamondSharp } from "react-icons/io5";
import { useGlobalContext } from "../context/GlobalContext";

function Navbar() {
  const [state] = useGlobalContext();

  return (
    <header className="h-8 flex justify-between items-center gap-20 my-5 sticky">
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
          <div className="bg-gold text-black h-4 w-4 flex justify-center items-center rounded-full absolute bottom-5 left-7 font-bold text-sm">
            <p>{state.quantity}</p>
          </div>
        </div>
      </NavLink>
    </header>
  );
}

export default Navbar;

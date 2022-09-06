import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AddItemState } from "../store/reducers/addItemReducer";
import CartContent from "../components/CartContent";

function Cart() {
  const cartItems = useSelector<AddItemState, AddItemState[`cartItems`]>(
    (state) => {
      return state.cartItems;
    }
  );

  return (
    <div className="flex flex-col justify-center items-center flex-wrap gap-8">
      {cartItems.length > 0 ? (
        <div className="flex flex-col justify-center items-center gap-8 text-2xl">
          <h3>Cart Items</h3>

          {cartItems.map((item) => {
            return <CartContent key={item.id} {...item} />;
          })}

          <Link
            className="bg-gradient-to-br from-darkGold to-gold rounded-lg py-1 px-4 text-lg ease-in duration-200 hover:scale-110"
            to="/store/buy"
          >
            Return to Store
          </Link>

          <Link
            className="bg-gradient-to-br from-darkGold to-gold rounded-lg py-1 px-4 text-lg ease-in duration-200 hover:scale-110"
            to="/"
          >
            Return to Home
          </Link>
        </div>
      ) : (
        <>
          <h3 className="text-white">Cart is empty</h3>

          <Link
            className="bg-gradient-to-br from-darkGold to-gold rounded-lg py-1 px-4 ease-in duration-200 hover:scale-110"
            to="/store/buy"
          >
            Return to Store
          </Link>

          <Link
            className="bg-gradient-to-br from-darkGold to-gold rounded-lg py-1 px-4 ease-in duration-200 hover:scale-110"
            to="/"
          >
            Return to Home
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;

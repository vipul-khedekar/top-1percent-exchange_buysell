import { useSelector } from "react-redux";

import { AddItemState } from "../store/reducers/addItemReducer";

function Cart() {
  const cartItems = useSelector<AddItemState, AddItemState[`cartItems`]>(
    (state) => {
      return state.cartItems;
    }
  );

  return <div>abc</div>;
}

export default Cart;

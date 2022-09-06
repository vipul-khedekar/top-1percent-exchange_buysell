import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { StoreItems } from "../data/StoreItems";
import { AddItemState } from "../store/reducers/addItemReducer";
import Card from "./Card";

function Store() {
  const quantity = useSelector<AddItemState, AddItemState[`quantity`]>(
    (state) => {
      return state.quantity;
    }
  );

  const cart = useSelector<AddItemState, AddItemState[`cartItems`]>((state) => {
    return state.cartItems;
  });

  const dispatch = useDispatch();

  function addItem(id: number, title: string, price: string) {
    console.log(cart);
    dispatch({
      type: `ADD_ITEM`,
      payload: quantity + 1,
      item: [...cart, { id: id, title: title, price: price }],
    });
  }

  return (
    <div className="h-full w-full flex flex-wrap justify-center items-center gap-10 mt-10">
      {StoreItems &&
        StoreItems.map((product: any) => {
          return <Card key={product.id} {...product} addItem={addItem} />;
        })}
    </div>
  );
}

export default Store;

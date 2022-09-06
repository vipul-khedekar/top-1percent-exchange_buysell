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

  function addItem(id: number, title: string, price: string, image: string) {
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) return;
      }
    }

    dispatch({
      type: `ADD_ITEM`,
      payload: quantity + 1,
      item: [...cart, { id: id, title: title, price: price, image: image }],
    });
  }

  return (
    <main className="h-full w-full flex flex-wrap justify-center items-center gap-10 mt-24">
      {StoreItems &&
        StoreItems.map((product: any) => {
          return <Card key={product.id} {...product} addItem={addItem} />;
        })}
    </main>
  );
}

export default Store;

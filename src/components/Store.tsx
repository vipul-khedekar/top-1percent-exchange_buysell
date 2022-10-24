import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { AddItemState } from "../store/reducers/addItemReducer";

import { StoreItems } from "../data/StoreItems";
import Categories from "./Categories";

import Card from "./Card";

function Store() {
  const dispatch = useDispatch();

  const quantity = useSelector<AddItemState, AddItemState[`quantity`]>(
    (state) => {
      return state.quantity;
    }
  );
  const cart = useSelector<AddItemState, AddItemState[`cartItems`]>((state) => {
    return state.cartItems;
  });
  const [list, setList] = useState(StoreItems);

  const addItem = (
    id: number,
    title: string,
    price: number,
    image: string,
    e: React.MouseEvent<Element, MouseEvent>
  ) => {
    e.preventDefault();

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
  };

  const categorize = (category: string) => {
    if (category === `all`) {
      setList(StoreItems);
    } else {
      const filteredList = StoreItems.filter((item) => {
        return item.category === category;
      });

      setList(filteredList);
    }
  };

  return (
    <article className="flex flex-col justify-center items-center gap-8 mt-24">
      <Categories categorize={categorize} />

      <main className="h-full w-full flex flex-wrap justify-center items-center gap-10">
        {list &&
          list.map((product: any) => {
            return (
              <Link to={`/store/item/${product.id}`}>
                <Card key={product.id} {...product} addItem={addItem} />
              </Link>
            );
          })}
      </main>
    </article>
  );
}

export default Store;

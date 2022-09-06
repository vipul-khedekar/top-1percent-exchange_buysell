import { useState } from "react";

import { StoreItems } from "../data/StoreItems";
import Card from "./Card";

function Store() {
  const [cartItems, setCartItems] = useState([]);

  function addItem(id) {
    cartItems.push(id);
    setCartItems(cartItems);
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

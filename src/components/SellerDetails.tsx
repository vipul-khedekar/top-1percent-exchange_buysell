import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddItemState } from "../store/reducers/addItemReducer";

import { StoreItems } from "../data/StoreItems";

type ImageGridProps = {
  id: any;
};

function SellerDetails({ id }: ImageGridProps) {
  const dispatch = useDispatch();

  const quantity = useSelector<AddItemState, AddItemState[`quantity`]>(
    (state) => {
      return state.quantity;
    }
  );
  const cart = useSelector<AddItemState, AddItemState[`cartItems`]>((state) => {
    return state.cartItems;
  });
  const [message, setMessage] = useState(``);

  const product: any = StoreItems.find((item) => {
    return item.id === Number(id);
  });

  const addToCart = () => {
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) return;
      }
    }

    dispatch({
      type: `ADD_ITEM`,
      payload: quantity + 1,
      item: [
        ...cart,
        {
          id: product.id,
          title: product.item.title,
          price: product.item.price,
          image: product.images.main,
        },
      ],
    });
  };

  const showTalkMessage = () => {
    setTimeout(() => {
      setMessage(`Seller is notified.`);
      setTimeout(() => {
        setMessage(``);
      }, 2000);
    }, 400);
  };

  const showBuyMessage = () => {
    setTimeout(() => {
      setMessage(`Item added to cart.`);
      setTimeout(() => {
        setMessage(``);
      }, 2000);
    }, 400);

    addToCart();
  };

  return (
    <section className="w-[340px] flex flex-col justify-between items-center gap-4 p-4 border-[2.5px] border-gold rounded-md text-sm">
      <p className="font-raleway">Seller: {product && product.owner.name}</p>

      <p className="font-raleway">{product && product.owner.country}</p>

      <div className="h-4 my-1 font-raleway italic">{message}</div>

      <section className="flex gap-4">
        <button
          onClick={() => showTalkMessage()}
          className="w-[140px] bg-gradient-to-br from-darkGold to-gold py-2 px-3 rounded-md"
          type="button"
        >
          Can we talk?
        </button>

        <button
          onClick={() => showBuyMessage()}
          className="w-[140px] bg-gradient-to-br from-darkGold to-gold py-2 px-3 rounded-md"
          type="button"
        >
          Take my money
        </button>
      </section>
    </section>
  );
}

export default SellerDetails;

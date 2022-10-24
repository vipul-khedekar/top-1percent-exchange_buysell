import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { AddItemState } from "../store/reducers/addItemReducer";

import CartContent from "../components/CartContent";
import TotalCartPrice from "../components/TotalCartPrice";

function Cart() {
  const dispatch = useDispatch();

  const quantity = useSelector<AddItemState, AddItemState[`quantity`]>(
    (state) => {
      return state.quantity;
    }
  );
  const cartItems = useSelector<AddItemState, AddItemState[`cartItems`]>(
    (state) => {
      return state.cartItems;
    }
  );

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  console.log(totalPrice);

  const removeItem = (id: number, e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();

    const filteredList = cartItems.filter((item) => {
      return item.id !== id;
    });

    dispatch({
      type: `REMOVE_ITEM`,
      payload: quantity - 1,
      item: filteredList,
    });
  };

  return (
    <article>
      {cartItems?.length > 0 ? (
        <article className="flex flex-col justify-center items-center gap-8">
          <section className="flex flex-col justify-center items-center flex-wrap gap-2  text-2xl">
            <h3 className="font-ptserif">Cart Items</h3>

            {cartItems &&
              cartItems.map((item) => {
                return (
                  <Link to={`/store/item/${item.id}`}>
                    <CartContent
                      key={item.id}
                      {...item}
                      removeItem={removeItem}
                    />
                  </Link>
                );
              })}

            {totalPrice && <TotalCartPrice totalPrice={totalPrice} />}
          </section>

          <nav className="flex flex-col gap-6">
            <Link
              className="bg-gradient-to-br from-darkGold to-gold py-1 px-4 rounded-lg text-lg ease-in duration-200 hover:scale-110"
              to="/store/buy"
            >
              Return to Store
            </Link>

            <Link
              className="bg-gradient-to-br from-darkGold to-gold py-1 px-4 rounded-lg text-lg ease-in duration-200 hover:scale-110"
              to="/"
            >
              Return to Home
            </Link>
          </nav>
        </article>
      ) : (
        <article className="flex flex-col justify-center items-center flex-wrap gap-8">
          <h3 className="text-white font-ptserif">Cart is empty</h3>

          <nav className="flex flex-col gap-6">
            <Link
              className="bg-gradient-to-br from-darkGold to-gold py-1 px-4 rounded-lg ease-in duration-200 hover:scale-110"
              to="/store/buy"
            >
              Return to Store
            </Link>

            <Link
              className="bg-gradient-to-br from-darkGold to-gold py-1 px-4 rounded-lg ease-in duration-200 hover:scale-110"
              to="/"
            >
              Return to Home
            </Link>
          </nav>
        </article>
      )}
    </article>
  );
}

export default Cart;

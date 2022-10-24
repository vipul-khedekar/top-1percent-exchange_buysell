import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddItemState } from "../store/reducers/addItemReducer";

import ListingCard from "./ListingCard";

function Seller() {
  const dispatch = useDispatch();

  const sellerListing = useSelector<AddItemState, AddItemState[`listings`]>(
    (state) => {
      return state.listings;
    }
  );
  const [title, setTitle] = useState(``);
  const [price, setPrice] = useState(``);
  const [seller, setSeller] = useState(``);
  const [imageLink, setImageLink] = useState(``);
  const [myListing, setMyListing] = useState(sellerListing);

  const uploadMyListing = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();

    if (
      title !== `` &&
      price !== `` &&
      seller !== `` &&
      title.length <= 20 &&
      seller.length <= 20 &&
      price.length <= 20
    ) {
      const item = {
        id: Date.now(),
        category: `myList`,
        owner: {
          name: seller,
        },
        item: {
          title: title,
          price: price,
        },
        images: {
          main: imageLink,
        },
      };
      myListing.push(item);

      setMyListing(myListing);
      dispatch({ type: `ADD_LISTING`, listItems: myListing });

      setTitle(``);
      setPrice(``);
      setSeller(``);
      setImageLink(``);
    } else {
      alert(
        `• Filling Title, Price & Seller fields is mandatory.

• Price should be a number only.

• Title, Price and Owner name should not exceed more than 20 characters.`
      );
    }
  };

  const deleteAListing = (id: number) => {
    const list = myListing.filter((item) => {
      return item.id !== id;
    });

    setMyListing(list);
    dispatch({ type: `ADD_LISTING`, listItems: list });
  };

  return (
    <main className="flex flex-col justify-center items-center gap-6 mt-20">
      <h4 className="text-semiDarkWhite font-ptserif text-lg">
        What would you like to sell?
      </h4>

      <h4 className="-mt-6 text-semiDarkWhite font-ptserif">
        (Upload the item details to see your listings.)
      </h4>

      <form
        className="flex flex-col justify-center items-center gap-3 p-4 border-b-2 border-black"
        action="POST"
      >
        <section>
          <label className="mr-14 text-semiDarkWhite" htmlFor="title">
            Title:
          </label>

          <input
            onChange={(e) => setTitle(e.target.value)}
            className="h-8 w-96 bg-black p-4 rounded-sm text-semiDarkWhite"
            value={title}
            placeholder="What do you want to call this item?"
            pattern="[a-zA-Z ]{1,20}"
            id="title"
            type="text"
            required
          />
        </section>

        <section>
          <label className="mr-14 text-semiDarkWhite" htmlFor="price">
            Price:
          </label>

          <input
            onChange={(e) => setPrice(e.target.value)}
            className="h-8 w-96 bg-black p-4 rounded-sm text-semiDarkWhite appearance-none"
            value={price}
            placeholder="How much do you think is it's worth?"
            pattern="[0-9]{1,}"
            id="price"
            type="number"
            required
          />
        </section>

        <section>
          <label className="mr-12 text-semiDarkWhite" htmlFor="owner">
            Seller:
          </label>

          <input
            onChange={(e) => setSeller(e.target.value)}
            className="h-8 w-96 bg-black p-4 rounded-sm text-semiDarkWhite"
            value={seller}
            placeholder="What is your name?"
            pattern="[a-zA-Z ]{1,15}"
            id="owner"
            type="text"
            required
          />
        </section>

        <section>
          <label className="mr-2 text-semiDarkWhite" htmlFor="imageLink">
            Image Link:
          </label>

          <input
            onChange={(e) => setImageLink(e.target.value)}
            className="h-8 w-96 bg-black p-4 rounded-sm text-semiDarkWhite"
            value={imageLink}
            placeholder="Paste an image link"
            id="imageLink"
            type="text"
          />
        </section>

        <button
          onClick={(e) => uploadMyListing(e)}
          className="bg-gradient-to-br from-darkGold to-gold py-1 px-4 rounded-md text-semiDarkWhite scale-100 ease-in duration-100 hover:scale-105"
          type="submit"
        >
          Upload
        </button>
      </form>

      {myListing?.length > 0 && (
        <article className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-semiDarkWhite font-ptserif text-lg">
            My Listings
          </h3>

          <section className="w-full flex flex-wrap justify-center items-center gap-4 p-2">
            {sellerListing &&
              sellerListing.map((item) => {
                return (
                  <ListingCard
                    key={item.id}
                    {...item}
                    deleteAListing={deleteAListing}
                  />
                );
              })}
          </section>
        </article>
      )}
    </main>
  );
}

export default Seller;

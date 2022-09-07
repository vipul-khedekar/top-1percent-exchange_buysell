import { useState } from "react";

function Seller() {
  const [title, setTitle] = useState(``);
  const [price, setPrice] = useState(``);
  const [seller, setSeller] = useState(``);
  const [imageLink, setImageLink] = useState(``);

  const myListing: Array<object> = [];

  function uploadMyListing(e: object) {
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
        title: title,
        price: price,
        seller: seller,
        imageLink: imageLink,
      };
      myListing.push(item);

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
  }

  return (
    <main className="flex flex-col justify-center items-center gap-8 mt-24">
      <h4 className="text-semiDarkWhite">What would you like to sell?</h4>

      <form
        className="flex flex-col justify-center items-center gap-4"
        action="POST"
      >
        <div>
          <label className="mr-14 text-semiDarkWhite" htmlFor="title">
            Title:
          </label>

          <input
            onChange={(e) => setTitle(e.target.value)}
            className="h-8 w-96 bg-black rounded-sm p-4 text-semiDarkWhite"
            value={title}
            id="title"
            type="text"
            placeholder="What do you want to call this item?"
            pattern="[a-zA-Z ]{1,20}"
            required
          />
        </div>

        <div>
          <label className="mr-14 text-semiDarkWhite" htmlFor="price">
            Price:
          </label>

          <input
            onChange={(e) => setPrice(e.target.value)}
            className="h-8 w-96 bg-black rounded-sm p-4 text-semiDarkWhite"
            value={price}
            id="price"
            type="text"
            placeholder="How much do you think is it's worth?"
            pattern="[0-9]{1,}"
            required
          />
        </div>

        <div>
          <label className="mr-12 text-semiDarkWhite" htmlFor="owner">
            Seller:
          </label>

          <input
            onChange={(e) => setSeller(e.target.value)}
            className="h-8 w-96 bg-black rounded-sm p-4 text-semiDarkWhite"
            value={seller}
            id="owner"
            type="text"
            placeholder="What is your name?"
            pattern="[a-zA-Z ]{1,15}"
            required
          />
        </div>

        <div>
          <label className="mr-2 text-semiDarkWhite" htmlFor="imageLink">
            Image Link:
          </label>

          <input
            onChange={(e) => setImageLink(e.target.value)}
            className="h-8 w-96 bg-black rounded-sm p-4 text-semiDarkWhite"
            value={imageLink}
            id="imageLink"
            type="text"
            placeholder="Paste an image link"
          />
        </div>

        <button
          onClick={(e) => uploadMyListing(e)}
          className="bg-gradient-to-br from-darkGold to-gold rounded-md py-1 px-4 text-semiDarkWhite scale-100 ease-in duration-100 hover:scale-105"
          type="submit"
        >
          Upload
        </button>
      </form>
    </main>
  );
}

export default Seller;

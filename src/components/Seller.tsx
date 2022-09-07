function Seller() {
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
            className="h-8 w-96 bg-black rounded-sm p-4 text-semiDarkWhite"
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
            className="h-8 w-96 bg-black rounded-sm p-4 text-semiDarkWhite"
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
            className="h-8 w-96 bg-black rounded-sm p-4 text-semiDarkWhite"
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
            className="h-8 w-96 bg-black rounded-sm p-4 text-semiDarkWhite"
            id="imageLink"
            type="text"
            placeholder="Paste an image link"
          />
        </div>

        <button
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

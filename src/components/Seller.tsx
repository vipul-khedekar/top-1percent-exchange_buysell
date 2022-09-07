function Seller() {
  return (
    <main className="flex flex-col justify-center items-center gap-8 mt-24">
      <h4>What would you like to sell?</h4>

      <form
        className="flex flex-col justify-center items-center gap-4"
        action="POST"
      >
        <div>
          <label className="mr-12" htmlFor="title">
            Title:{" "}
          </label>

          <input
            className="h-8 w-96 bg-black rounded-sm p-4"
            id="title"
            type="text"
            placeholder="What do you want to call this item?"
          />
        </div>

        <div>
          <label className="mr-12" htmlFor="price">
            Price:{" "}
          </label>

          <input
            className="h-8 w-96 bg-black rounded-sm p-4"
            id="price"
            type="text"
            placeholder="How much do you think is it's worth?"
          />
        </div>

        <div>
          <label className="mr-10" htmlFor="owner">
            Seller:{" "}
          </label>

          <input
            className="h-8 w-96 bg-black rounded-sm p-4"
            id="owner"
            type="text"
            placeholder="What is your name?"
          />
        </div>

        <div>
          <label className="mr-0" htmlFor="imageLink">
            Image Link:{" "}
          </label>

          <input
            className="h-8 w-96 bg-black rounded-sm p-4"
            id="imageLink"
            type="text"
            placeholder="Paste an image link"
          />
        </div>

        <button
          className="bg-gradient-to-br from-darkGold to-gold rounded-md py-1 px-4"
          type="submit"
        >
          Upload
        </button>
      </form>
    </main>
  );
}

export default Seller;

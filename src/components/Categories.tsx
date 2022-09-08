type CategoryProps = {
  categorize(category: string): void;
};

function Categories({ categorize }: CategoryProps) {
  const categories = {
    all: `all`,
    cars: `cars`,
    bikes: `bikes`,
    watches: `watches`,
    collectibles: `collectibles`,
    yachts: `yachts`,
    jets: `jets`,
    helicopters: `helicopters`,
  };

  return (
    <nav className="h-6 flex justify-center items-center gap-10 font-raleway underline-offset-4">
      <button
        onClick={() => categorize(categories.all)}
        className="underline hover:text-gold"
        type="button"
      >
        All
      </button>

      <button
        onClick={() => categorize(categories.cars)}
        className="underline hover:text-gold"
        type="button"
      >
        Cars
      </button>

      <button
        onClick={() => categorize(categories.bikes)}
        className="underline hover:text-gold"
        type="button"
      >
        Bikes
      </button>

      <button
        onClick={() => categorize(categories.watches)}
        className="underline hover:text-gold"
        type="button"
      >
        Watches
      </button>

      <button
        onClick={() => categorize(categories.collectibles)}
        className="underline hover:text-gold"
        type="button"
      >
        Collectibles
      </button>

      <button
        onClick={() => categorize(categories.yachts)}
        className="underline hover:text-gold"
        type="button"
      >
        Yachts
      </button>

      <button
        onClick={() => categorize(categories.jets)}
        className="underline hover:text-gold"
        type="button"
      >
        Jets
      </button>

      <button
        onClick={() => categorize(categories.helicopters)}
        className="underline hover:text-gold"
        type="button"
      >
        Helicopters
      </button>
    </nav>
  );
}

export default Categories;

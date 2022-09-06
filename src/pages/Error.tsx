import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-8 mt-32">
      <h1 className="text-semiDarkWhite text-4xl">
        Whoopse!!! Such page doesn't exists.
      </h1>

      <Link
        className="bg-gradient-to-br from-darkGold to-gold rounded-lg py-1 px-4 ease-in duration-200 hover:scale-110"
        to="/store/buy"
      >
        Return to Store
      </Link>

      <Link
        className="bg-gradient-to-br from-darkGold to-gold rounded-lg py-1 px-4 ease-in duration-200 hover:scale-110"
        to="/"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default Error;

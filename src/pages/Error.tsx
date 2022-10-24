import { Link } from "react-router-dom";

function Error() {
  return (
    <article className="h-full w-full flex flex-col justify-center items-center gap-8 mt-32">
      <h1 className="text-semiDarkWhite font-ptserif text-4xl">
        Whoopse!!! Such page doesn't exists.
      </h1>

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
  );
}

export default Error;

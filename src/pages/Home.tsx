import { Link } from "react-router-dom";

import HomeBackground from "../images/home-background.webp";

function Home() {
  return (
    <article className="-m-5 relative">
      <img
        className="h-[100vh] w-[100vw] object-cover relative z-10 brightness-[80%]"
        src={HomeBackground}
        alt="home-background"
      />

      <article className="h-[500px] md:w-[510px] lg:w-auto flex flex-col justify-center items-start gap-8 ml-12 absolute z-10 top-32">
        <header className="font-ptserif text-[5.5rem] font-bold leading-[1]">
          <p>The</p>

          <p className="-mt-4">
            Top <span className="text-[8rem]">1%</span>
            's
          </p>

          <p>
            <span className="bg-gradient-to-tr from-darkGold to-gold bg-clip-text text-transparent">
              Thrift
            </span>{" "}
            Club
          </p>
        </header>

        <aside>
          <p className="text-sm italic">‣ Buy or sell used luxury products.</p>

          <p className="text-sm italic">
            ‣ A premium secondhand yet high-value marketplace.
          </p>

          <p className="text-sm italic">
            ‣ Browse through the catalogue of all available items by the like
            minded people.
          </p>
        </aside>

        <nav className="flex gap-8">
          <Link
            className="bg-gradient-to-tr from-darkGold to-gold px-4 py-2 rounded-md text-semiLightBlack font-bold scale-100 ease-in duration-150 animate-bounce hover:scale-110"
            to={"/store/buy"}
          >
            I'm here to buy
          </Link>

          <Link
            className="bg-gradient-to-tr from-darkGold to-gold px-4 py-2 rounded-md text-semiLightBlack font-bold scale-100 ease-in duration-150 animate-bounce hover:scale-110"
            to={"/store/sell"}
          >
            I'm here to sell
          </Link>
        </nav>
      </article>
    </article>
  );
}

export default Home;

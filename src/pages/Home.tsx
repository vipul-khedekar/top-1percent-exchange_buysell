import { Link } from "react-router-dom";
import HomeBackground from "../images/home-background.jpg";

function Home() {
  return (
    <div className="-m-5 relative">
      <img
        className="h-[100vh] w-[100vw] brightness-[80%] object-cover relative z-10"
        src={HomeBackground}
        alt="home-background"
      />

      <div className="h-[500px] lg:w-auto md:w-[510px] flex flex-col justify-center items-start gap-8 ml-12 absolute z-10 top-40">
        <div className="text-[5.5rem] leading-[1] font-bold font-ptserif">
          <p>The</p>

          <p className="-mt-7">
            Top <span className="text-[7.5rem]">1%</span>'s
          </p>

          <p>
            <span className="bg-gradient-to-tr from-darkGold to-gold bg-clip-text text-transparent">
              Exchange
            </span>{" "}
            Club
          </p>
        </div>

        <div>
          <p className="italic text-sm">‣ Buy or sell used luxury products.</p>

          <p className="italic text-sm">
            ‣ A members-only secondhand high-value trading marketplace.
          </p>

          <p className="italic text-sm">
            ‣ Browse through the catalogue of all available items put on sell by
            people like you.
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            className="bg-gradient-to-tr from-darkGold to-gold px-4 py-2 rounded-md text-semiLightBlack font-bold scale-100 ease-in duration-150 hover:scale-110"
            to={"/store/buy"}
          >
            I'm here to buy
          </Link>

          <Link
            className="bg-gradient-to-tr from-darkGold to-gold px-4 py-2 rounded-md text-semiLightBlack font-bold scale-100 ease-in duration-150 hover:scale-110"
            to={"/store/sell"}
          >
            I'm here to sell
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

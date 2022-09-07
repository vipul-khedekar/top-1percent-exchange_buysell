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

      <div className="h-[500px] w-[500px] ml-8 absolute z-10 top-72">
        <div>
          <p>The</p>
          <p>Top 1%'s</p>
          <p>Exchange Club</p>
        </div>

        <small>abc</small>

        <div>
          <Link to={"/store/buy"}>I'm here to buy</Link>

          <Link to={"/store/sell"}>I'm here to sell</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

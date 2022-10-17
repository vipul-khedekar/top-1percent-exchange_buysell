import { AiTwotoneDelete } from "react-icons/ai";

import DefaultImage from "../images/default-image-display.jpg";

type ListingCardProps = {
  id: number;
  category: string;
  owner: {
    name: string;
  };
  item: {
    title: string;
    price: string;
  };
  images: {
    main: string;
  };
  deleteAListing(id: number): void;
};

function ListingCard({
  id,
  category,
  owner,
  item,
  images,
  deleteAListing,
}: ListingCardProps) {
  const { name } = owner;
  const { title, price } = item;
  const { main } = images;

  return (
    <article className="h-28 w-96 flex flex-wrap justify-between items-center gap-6 px-2 py-1 border-[2px] border-darkGold rounded-md relative hover:border-gold hover:shadow-black hover:shadow-md">
      <img
        className="h-24 w-28 rounded-md object-cover scale-100 ease-in duration-200 hover:scale-125"
        src={!main.startsWith(`https://`) ? DefaultImage : main}
        loading="lazy"
        alt={title}
      />

      <div className="flex flex-col justify-center items-center">
        <p className="text-semiDarkWhite text-center">{title}</p>

        <p className="text-semiDarkWhite text-sm text-center">₹{price}</p>

        <p className="text-semiDarkWhite text-xs text-center">{name}</p>
      </div>

      <button
        onClick={() => deleteAListing(id)}
        className="h-6 w-6 bg-gradient-to-br from-darkGold to-gold flex justify-center items-center rounded-sm scale-100 ease-in duration-100 hover:scale-105"
        type="button"
      >
        <AiTwotoneDelete className="text-semiLightBlack text-lg" />
      </button>
    </article>
  );
}

export default ListingCard;

import { GrFormAdd } from "react-icons/gr";

type CardProps = {
  id: number;
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
  addItem(
    id: number,
    title: string,
    price: string,
    main: string,
    e: React.MouseEvent<Element, MouseEvent>
  ): void;
};

function Card({ id, owner, item, images, addItem }: CardProps) {
  const { name } = owner;
  const { title, price } = item;
  const { main } = images;

  return (
    <div className="h-[27rem] w-[22rem] bg-semiLightBlack flex flex-col justify-between items-center gap-4 border-[0.15rem] border-darkGold rounded-xl p-1 relative scale-100 ease-in duration-200 hover:scale-105 hover:border-gold hover:shadow-black hover:shadow-lg">
      <img
        className="h-[14rem] w-[95%] rounded-lg mt-2 object-cover scale-100 ease-in duration-200 cursor-pointer hover:scale-105 hover:shadow-black hover:shadow-md"
        src={main}
        alt={title}
      />

      <div className="flex flex-col justify-center items-center font-bold text-center">
        <h3 className="text-semiDarkWhite text-lg">{title}</h3>

        <h3 className="text-gold font-light">₹{price}</h3>
      </div>

      <div className="flex justify-between items-center gap-32 mb-5 text-semiLightBlack">
        <h3 className="w-36 text-semiDarkWhite text-sm text-center font-raleway">
          Seller: {name}
        </h3>

        <div
          onClick={(e) => addItem(id, title, price, main, e)}
          className="h-8 w-8 bg-gradient-to-br from-darkGold to-gold flex justify-center items-center rounded-lg scale-100 ease-in duration-200 hover:scale-125 cursor-pointer"
        >
          <GrFormAdd className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Card;

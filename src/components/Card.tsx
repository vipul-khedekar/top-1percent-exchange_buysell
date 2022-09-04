import { GrFormAdd } from "react-icons/gr";

type CardProps = {
  id: number;
  owner: object;
  item: object;
  images: object;
};

type OwnerProperties = {
  name: string;
};

type ItemProperties = {
  title: string;
  price: string;
};

type ImagesProperties = {
  main: string;
};

function Card({ id, owner, item, images }: CardProps) {
  const { name }: OwnerProperties = owner;
  const { title, price }: ItemProperties = item;
  const { main }: ImagesProperties = images;

  return (
    <div
      key={id}
      className="h-[28rem] w-[22rem] bg-semiLightBlack flex flex-col justify-between items-center gap-4 border-[0.15rem] border-darkGold rounded-xl p-1 relative scale-100 ease-in duration-200 hover:scale-105 hover:border-gold hover:shadow-md hover:shadow-[#00000030]"
    >
      <img
        className="h-[14rem] w-[95%] rounded-lg mt-2 object-cover scale-100 ease-in duration-200 hover:scale-105 hover:object- cursor-pointer"
        src={main}
        alt={title}
      />

      <div className="flex flex-col justify-center items-center font-bold text-center">
        <h3 className="text-semiDarkWhite text-lg">{title}</h3>

        <h3 className="text-darkGold text-base">₹{price}</h3>
      </div>

      <div className="flex justify-between items-center gap-32 mb-5 text-semiLightBlack">
        <h3 className="w-20 text-semiDarkWhite text-sm text-center">
          Seller {name}
        </h3>

        <div className="h-8 w-8 bg-gradient-to-br from-darkGold to-gold flex justify-center items-center rounded-lg scale-100 ease-in duration-200 hover:scale-125 cursor-pointer">
          <GrFormAdd className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Card;

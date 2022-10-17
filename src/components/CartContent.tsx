import { MdDeleteForever } from "react-icons/md";

type CartContentProps = {
  id: number;
  title: string;
  price: string;
  image: string;
  removeItem(id: number, e: React.MouseEvent<Element, MouseEvent>): void;
};

function CartContent({
  id,
  title,
  price,
  image,
  removeItem,
}: CartContentProps) {
  return (
    <div className="h-[10rem] w-[46rem] flex justify-between items-center gap-4 p-4 border-[2px] border-gold rounded-md scale-100 ease-in duration-200 hover:scale-105">
      <img
        className="h-[8rem] w-[10rem] rounded-md object-cover"
        src={image}
        loading="lazy"
        alt={title}
      />

      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-xl text-center">{title}</p>
        <p className="text-lg">₹{price}</p>
      </div>

      <button
        onClick={(e) => removeItem(id, e)}
        className="h-8 w-8 bg-gold flex justify-center items-center rounded-md scale-100 ease-in duration-200 hover:scale-105"
        type="button"
      >
        <MdDeleteForever className="text-semiLightBlack text-2xl" />
      </button>
    </div>
  );
}

export default CartContent;

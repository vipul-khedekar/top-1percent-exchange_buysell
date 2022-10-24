import { MdDeleteForever } from "react-icons/md";

type CartContentProps = {
  id: number;
  title: string;
  price: number;
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
    <section className="h-[10rem] w-[46rem] flex justify-between items-center gap-4 p-4 border-[2px] border-gold rounded-md scale-100 ease-in duration-200 hover:scale-105">
      <img
        className="h-[8rem] w-[10rem] rounded-md object-cover"
        src={image}
        loading="lazy"
        alt={title}
      />

      <section className="flex flex-col justify-center items-center gap-4">
        <p className="text-xl text-center">{title}</p>

        <p className="text-lg">₹{price.toLocaleString(`en`)}</p>
      </section>

      <button
        onClick={(e) => removeItem(id, e)}
        className="h-8 w-8 bg-gold flex justify-center items-center rounded-md scale-100 ease-in duration-200 hover:scale-105"
        type="button"
      >
        <MdDeleteForever className="text-semiLightBlack text-2xl" />
      </button>
    </section>
  );
}

export default CartContent;

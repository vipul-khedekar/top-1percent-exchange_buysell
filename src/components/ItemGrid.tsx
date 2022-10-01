import { StoreItems } from "../data/StoreItems";

type ImageGridProps = {
  id: number;
};

function ItemDetails({ id }: ImageGridProps) {
  const product: any = StoreItems.find((item) => {
    return item.id === Number(id);
  });

  return (
    <article className="h-[330px] w-[400px] border-[2.5px] border-gold rounded-md p-4 overflow-y-scroll">
      <div className="flex justify-between items-center gap-28 text-2xl">
        <p>{product.item.title}</p>
        <p className="italic text-lg">yr.{product.item.year}</p>
      </div>
      <p className="text-darkGold hover:text-gold text-lg">
        ₹{product.item.price}
      </p>

      <p className="mt-6 font-light">{product.item.place}</p>
      <p className="italic">{product.item.about}</p>
    </article>
  );
}

export default ItemDetails;

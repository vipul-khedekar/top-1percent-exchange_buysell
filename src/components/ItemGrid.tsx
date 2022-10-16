import { StoreItems } from "../data/StoreItems";

type ImageGridProps = {
  id: any;
};

function ItemDetails({ id }: ImageGridProps) {
  const product: any = StoreItems.find((item) => {
    return item.id === Number(id);
  });

  return (
    <article className="h-[330px] w-[400px] p-4 border-[2.5px] border-gold rounded-md overflow-y-scroll">
      <div className="flex justify-between items-center gap-28 text-2xl">
        <p>{product && product.item.title}</p>

        <p className="text-lg italic">yr.{product && product.item.year}</p>
      </div>

      <p className="text-darkGold hover:text-gold text-lg">
        ₹{product && product.item.price}
      </p>

      <p className="mt-6 font-light">{product && product.item.place}</p>

      <p className="italic">{product && product.item.about}</p>
    </article>
  );
}

export default ItemDetails;

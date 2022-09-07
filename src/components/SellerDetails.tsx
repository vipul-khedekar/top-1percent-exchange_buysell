import { StoreItems } from "../data/StoreItems";

type ImageGridProps = {
  id: number;
};

function SellerDetails({ id }: ImageGridProps) {
  const product = StoreItems.find((item) => {
    return item.id === Number(id);
  });

  return (
    <article className="w-[380px] flex flex-col justify-between items-center gap-4 p-4 border-[2.5px] border-gold rounded-md text-sm">
      <p>Seller: {product.owner.name}</p>

      <p>{product.owner.country}</p>

      <div className="flex gap-4">
        <button
          className="w-[140px] bg-gradient-to-br from-darkGold to-gold py-2 px-3 rounded-md"
          type="button"
        >
          Can we talk?
        </button>

        <button
          className="w-[140px] bg-gradient-to-br from-darkGold to-gold py-2 px-3 rounded-md"
          type="button"
        >
          Take my money
        </button>
      </div>
    </article>
  );
}

export default SellerDetails;

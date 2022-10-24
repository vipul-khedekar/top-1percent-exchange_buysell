import { StoreItems } from "../data/StoreItems";
import DefaultImage from "../images/default-image-display.webp";

type ImageGridProps = {
  id: any;
};

function ImageGrid({ id }: ImageGridProps) {
  const product: any = StoreItems.find((item) => {
    return item.id === Number(id);
  });

  return (
    <figure className="h-[350px] w-[800px] flex justify-center items-center px-8">
      <img
        className="h-[335px] w-[335px] rounded-lg object-cover scale-100 ease-in duration-200 hover:scale-105"
        src={product.images.main || DefaultImage}
        loading="lazy"
        alt={product && product.item.title}
      />

      <figure className="flex flex-row flex-wrap justify-center items-center gap-4">
        {product &&
          product.images.secondary.map((image: string) => {
            return (
              <img
                className="h-[160px] w-[160px] rounded-lg object-cover scale-100 ease-in duration-200 hover:scale-110"
                src={image}
                loading="lazy"
                alt="secondary-image"
              />
            );
          })}
      </figure>
    </figure>
  );
}

export default ImageGrid;

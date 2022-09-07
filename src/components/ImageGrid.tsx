import { StoreItems } from "../data/StoreItems";
import DefaultImage from "../images/default-image-display.jpg";

type ImageGridProps = {
  id: number;
};

function ImageGrid({ id }: ImageGridProps) {
  const product = StoreItems.find((item) => {
    return item.id === Number(id);
  });

  return (
    <article className="h-[350px] w-[800px] flex justify-center items-center px-8">
      <img
        className="h-[335px] w-[335px] object-cover scale-100 ease-in duration-200 hover:scale-105"
        src={product.images.main || DefaultImage}
        alt={product.item.title}
      />

      <div className="flex flex-row flex-wrap justify-center items-center gap-4">
        {product.images.secondary.map((image) => {
          return (
            <img
              className="h-[160px] w-[160px] object-cover scale-100 ease-in duration-200 hover:scale-110"
              src={image}
              alt="secondary-image"
            />
          );
        })}
      </div>
    </article>
  );
}

export default ImageGrid;

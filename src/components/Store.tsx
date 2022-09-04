import { StoreItems } from "../data/StoreItems";
import Card from "./Card";

function Store() {
  return (
    <div className="h-full w-full flex flex-wrap justify-center items-center gap-8 mt-8">
      {StoreItems &&
        StoreItems.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
    </div>
  );
}

export default Store;

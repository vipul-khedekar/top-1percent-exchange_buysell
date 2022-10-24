import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import ImageGrid from "../components/ImageGrid";
import ItemGrid from "../components/ItemGrid";
import SellerDetails from "../components/SellerDetails";

function ItemDetails() {
  const params = useParams();

  return (
    <article className="overflow-x-hidden">
      <Navbar />

      <section className="flex flex-col justify-start items-center gap-2 mt-14">
        <ImageGrid id={params.id} />

        <section className="flex justify-between items-start gap-4 px-8">
          <ItemGrid id={params.id} />

          <SellerDetails id={params.id} />
        </section>
      </section>
    </article>
  );
}

export default ItemDetails;

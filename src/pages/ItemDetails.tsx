import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import ImageGrid from "../components/ImageGrid";
import ItemGrid from "../components/ItemGrid";
import SellerDetails from "../components/SellerDetails";

function ItemDetails() {
  const params = useParams();

  return (
    <div>
      <Navbar />

      <section className="flex flex-col justify-start items-center gap-4 mt-24">
        <ImageGrid key={params.id} id={params.id} />

        <div className="flex justify-between items-start gap-8">
          <ItemGrid key={params.id} id={params.id} />
          <SellerDetails key={params.id} id={params.id} />
        </div>
      </section>
    </div>
  );
}

export default ItemDetails;

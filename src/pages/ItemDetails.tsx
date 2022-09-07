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

      <section className="flex flex-col justify-start items-center gap-4 mt-20">
        <ImageGrid id={params.id} />

        <div className="flex justify-between items-start gap-8">
          <ItemGrid id={params.id} />
          <SellerDetails id={params.id} />
        </div>
      </section>
    </div>
  );
}

export default ItemDetails;

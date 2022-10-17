type TotalCartPriceProps = {
  totalPrice: number;
};

function TotalCartPrice({ totalPrice }: TotalCartPriceProps) {
  return (
    <section className="flex items-center gap-4 my-2">
      <h3>Total Cart Value: </h3>

      <p>₹{totalPrice.toLocaleString(`en`)}</p>
    </section>
  );
}

export default TotalCartPrice;

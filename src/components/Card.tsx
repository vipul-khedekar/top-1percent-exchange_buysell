type CardProps = {
  id: number;
  item: object;
  images: object;
};

function Card({ id, item, images }: CardProps) {
  const {} = item;

  return <div key={id}>temp</div>;
}

export default Card;

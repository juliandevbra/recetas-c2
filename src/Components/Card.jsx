import { cardContainer } from "../styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ receta, setCart, cart }) => {
  const { pricePerServing, title, image } = receta;
  return (
    <div className={cardContainer}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>${pricePerServing}</h4>
      <Counter />
      <button onClick={() => setCart([...cart, receta])}>Agregar al 🛒</button>
    </div>
  );
};

export default Card;

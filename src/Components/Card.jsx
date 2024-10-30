import { cardContainer } from "../styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ pizza, setCart, cart }) => {
  const { precio, tipo, img } = pizza;
  return (
    <div className={cardContainer}>
      <img src={img} alt={tipo} />
      <h3>{tipo}</h3>
      <h4>{precio}</h4>
      <Counter />
      <button onClick={() => setCart([...cart, pizza])}>Agregar al 🛒</button>
    </div>
  );
};

export default Card;

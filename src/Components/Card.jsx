import { Link } from "react-router-dom";
import { cardContainer } from "../styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ receta, setCart, cart }) => {
  const { pricePerServing, title, image } = receta;
  return (
    <div className={cardContainer}>
      <Link to={"/detail/" + receta.id}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <h4>${pricePerServing}</h4>
      <Counter />
      <button onClick={() => setCart([...cart, receta])}>Agregar al 🛒</button>
    </div>
  );
};

export default Card;

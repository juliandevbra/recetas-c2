import { Link } from "react-router-dom";
import { cardContainer } from "../styles/Card.module.css";
import Counter from "./Counter";
import { useRecipeStates } from "../Context/Context";
import { useState } from "react";

const Card = ({ receta }) => {
  const { pricePerServing, title, image } = receta;
  const [counter, setCounter] = useState(0);
  const { setCart } = useRecipeStates();
  return (
    <div className={cardContainer}>
      <Link to={"/detail/" + receta.id}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <h4>${pricePerServing}</h4>
      <Counter counter={counter} setCounter={setCounter} />
      <button
        disabled={counter == 0}
        onClick={() => setCart((prev) => [...prev, receta])}
      >
        Agregar al 🛒
      </button>
    </div>
  );
};

export default Card;

// setEstado(valorNuevo) //una forma
// setEstado((estado) => { //Otra Forma
//   return [...estado, valorNuevo]
// })

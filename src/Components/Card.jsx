import { Link, useLocation } from "react-router-dom";
import { cardContainer } from "../styles/Card.module.css";
import Counter from "./Counter";
import { useRecipeStates } from "../Context/Context";
import { useState } from "react";
import { Bounce, Flip, Zoom, toast } from "react-toastify";

const Card = ({ receta }) => {
  const { pricePerServing, title, image } = receta;
  const [counter, setCounter] = useState(0);
  const { dispatch } = useRecipeStates();
  const location = useLocation();
  // console.log(location);
  const addCart = () => {
    dispatch({ type: "ADD_CART", payload: { ...receta, counter: counter } });
    toast("Agregado al carrito 🛒", {
      position: "bottom-right",
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      theme: "dark",
      transition: Zoom,
    });
  };

  return (
    <div className={cardContainer}>
      <Link to={"/detail/" + receta.id}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <h4>${pricePerServing}</h4>
      {location.pathname == "/cart" ? (
        <h3>Platos agregados: {receta.counter}</h3>
      ) : (
        <>
          <Counter counter={counter} setCounter={setCounter} />
          <button className="cartBtn" disabled={counter == 0} onClick={addCart}>
            Agregar al 🛒
          </button>
        </>
      )}
    </div>
  );
};

export default Card;

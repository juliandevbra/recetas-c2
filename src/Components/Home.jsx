import { useState } from "react";
import { pizzas } from "../utils/pizzas";
import Card from "./Card";

const Home = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <div className="list-container">
      {pizzas.map((pizza) => {
        return (
          <Card
            key={pizza.id}
            // {...pizza}
            pizza={pizza}
            setCart={setCart}
            cart={cart}
          />
        );
      })}
    </div>
  );
};

export default Home;

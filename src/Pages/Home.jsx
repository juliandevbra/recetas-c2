import { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useLocation } from "react-router-dom";
const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "40%",
  margin: "10px auto",
  borderRadius: "10px",
  padding: "10px",
};
const Home = () => {
  const location = useLocation();
  console.log(location);
  const [cart, setCart] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data.recipes);
      setRecipes(res.data.recipes);
    });
  }, []);

  return (
    <>
      <h1 style={titleStyles}>Bienvenidos a proyecto Recetas</h1>
      <div className="list-container">
        {recipes.map((receta) => {
          return (
            <Card
              key={receta.id}
              receta={receta}
              setCart={setCart}
              cart={cart}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;

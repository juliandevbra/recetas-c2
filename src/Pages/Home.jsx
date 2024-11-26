import Card from "../Components/Card";
// import { useLocation } from "react-router-dom";
import { useRecipeStates } from "../Context/Context";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "40%",
  margin: "10px auto",
  borderRadius: "10px",
  padding: "10px",
};
const Home = () => {
  // const location = useLocation();
  // console.log(location);
  const { recipes } = useRecipeStates();

  return (
    <>
      <h1 style={titleStyles}>Bienvenidos a proyecto Recetas</h1>
      <div className="list-container">
        {recipes.map((receta) => {
          return <Card key={receta.id} receta={receta} />;
        })}
      </div>
    </>
  );
};

export default Home;

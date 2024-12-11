import Card from "../Components/Card";
import { useRecipeStates } from "../Context/Context";
import withErrorBoundary from "../withErrorBoundary";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "40%",
  margin: "10px auto",
  borderRadius: "10px",
  padding: "10px",
};
const Home = () => {
  const { state } = useRecipeStates();

  return (
    <>
      <h1 style={titleStyles}>Bienvenidos a proyecto Recetas</h1>
      <div className="list-container">
        {state.recipes.map((receta) => {
          return <Card key={receta.id} receta={receta} />;
        })}
      </div>
    </>
  );
};

export default withErrorBoundary(Home);

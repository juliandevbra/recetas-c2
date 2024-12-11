import React from "react";
import { useRecipeStates } from "../Context/Context";
import Card from "../Components/Card";
import withErrorBoundary from "../withErrorBoundary";

const Cart = () => {
  const { state } = useRecipeStates();

  return (
    <div>
      <h1>Recetas agregadas</h1>
      <div>
        {state.cart.map((receta) => (
          <Card key={receta.id} receta={receta} />
        ))}
      </div>
    </div>
  );
};

export default withErrorBoundary(Cart);

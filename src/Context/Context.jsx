import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import Swal from "sweetalert2";

const RecipeStates = createContext();

const initialState = {
  cart: [],
  recipes: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const apiKey = import.meta.env.VITE_API_KEY;
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;
  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data.recipes);
        dispatch({ type: "GET_RECIPES", payload: res.data.recipes });
      })
      .catch((err) => {
        Swal.fire({
          title: "Oops...",
          text: "Error al traer la lista de recetas",
          icon: "error",
          footer: err,
          showConfirmButton: false,
        });
      });
  }, []);

  return (
    <RecipeStates.Provider value={{ state, dispatch }}>
      {children}
    </RecipeStates.Provider>
  );
};
export default Context;

export const useRecipeStates = () => useContext(RecipeStates);

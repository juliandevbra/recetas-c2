import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const RecipeStates = createContext();

const initialState = {
  cart: [],
  recipes: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [cart, setCart] = useState([]);
  // const [recipes, setRecipes] = useState([]);
  // console.log(cart);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data.recipes);
      dispatch({ type: "GET_RECIPES", payload: res.data.recipes });
      // setRecipes(res.data.recipes);
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

import React, { useReducer } from "react";
import { reducer } from "./reducer";

const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const randomNum = Math.floor(Math.random() * 100) + 1;

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "random", payload: randomNum })}>
        Random
      </button>
    </div>
  );
};

export default Counter;

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button disabled={counter === 0} onClick={() => setCounter(counter + 1)}>
        -
      </button>
      <h4>{counter}</h4>
      <button onClick={() => setCounter(counter - 1)}>+</button>
    </div>
  );
};

export default Counter;

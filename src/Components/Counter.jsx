const Counter = ({ counter, setCounter }) => {
  return (
    <div>
      <button disabled={counter === 0} onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <h4>{counter}</h4>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Counter;

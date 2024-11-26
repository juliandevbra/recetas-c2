import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div className="parent">
      <h1>ParentComponent</h1>
      <ChildComponent />
      {/* <p>Salario: {salario}</p> */}
    </div>
  );
};

export default ParentComponent;

import "./styles/App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import ClassComponent from "./Clase 9/ClassComponent";
import FuncComponent from "./Clase 9/FuncComponent";
import { useState } from "react";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "40%",
  margin: "10px auto",
  borderRadius: "10px",
  padding: "10px",
};

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {/* <ClassComponent /> */}
      {toggle && <FuncComponent />}
      <button onClick={() => setToggle(!toggle)}>Toggle Component</button>
      {/* <Navbar />
      <h1 style={titleStyles}>Bienvenidos a proyecto Recetas</h1>
      <Form />
      <Home /> */}
    </>
  );
}

export default App;

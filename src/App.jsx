import "./styles/App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "40%",
  margin: "10px auto",
  borderRadius: "10px",
  padding: "10px",
};

function App() {
  return (
    <>
      <Navbar />
      <h1 style={titleStyles}>Bienvenidos a proyecto Recetas</h1>
      <Home />
    </>
  );
}

export default App;

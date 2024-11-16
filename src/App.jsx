import "./styles/App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import FetchExample from "./Clase 10/FetchExample";
import AxiosExample from "./Clase 10/AxiosExample";

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
      {/* <FetchExample /> */}
      {/* <AxiosExample /> */}
      <Navbar />
      <h1 style={titleStyles}>Bienvenidos a proyecto Recetas</h1>
      <Form />
      <Home />
    </>
  );
}

export default App;

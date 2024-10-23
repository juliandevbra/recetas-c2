import "./App.css";
import Card from "./Components/Card";
// import { Navbar, Logo } from "./Components/Navbar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      {/* <Logo /> */}
      <Navbar />
      <h1>Bienvenidos a proyecto Recetas</h1>
      <Card title="Receta n° 1" text="Como hacer crumble de manzana" />
      <Card
        title="Ejemplo de receta 2"
        text="Con este truco el Hummus va a quedar muy rico!"
      />
      <Card
        title="Tercer receta"
        text="La clave de como preparar masa de pizza"
      />

      <hr />
      <h2>Quienes somos</h2>
      <Card title="Julián Espinoza" text="Diseño UX/UX y SEO">
        <h4>Linkedin</h4>
        <h4>Behance</h4>
      </Card>
      <Card title="Joel Huenupi" text="Backend y Devops">
        <h4>Facebook</h4>
      </Card>
    </>
  );
}

export default App;

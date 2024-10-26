import { pizzas } from "../utils/pizzas";
import Card from "./Card";

const Home = () => {
  //   let nombres = ['Mathias', 'Aylin', 'Benjamin']
  //   nombres.map((nombre, index) => <h1 key={index}>{nombre}</h1>)

  // const mapList = pizzas.map((pizza) => {
  //   // console.log(pizza);
  //   return (
  //     <div>
  //       <h3>{pizza.tipo}</h3>
  //     </div>
  //   );
  // });
  // console.log(mapList);

  return (
    <div className="list-container">
      {pizzas.map((pizza) => {
        return <Card key={pizza.id} {...pizza} />;
      })}
    </div>
  );
};

export default Home;

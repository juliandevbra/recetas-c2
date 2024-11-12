import { useEffect, useState } from "react";

const FuncComponent = () => {
  console.log("Cuerpo de función");
  const [nombre, setNombre] = useState("");
  const [contador, setContador] = useState(0);
  const [loading, setLoading] = useState(true);

  // componentDidMount()
  useEffect(() => {
    console.log("Montaje");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //   componentDidUpdate()
  useEffect(() => {
    console.log(
      "Esto se ejecuta cuando se monta y cuando se actualiza contador o nombre"
    );
  }, [contador, nombre]);

  //   componentWillUnmount()
  useEffect(() => {
    return () => {
      console.log("Se desmontó el componente");
    };
  }, []);

  return (
    <div>
      {console.log("Render")}
      {loading ? (
        "Cargando..."
      ) : (
        <>
          <h1>{contador}</h1>
          <button onClick={() => setContador(contador + 1)}>+</button>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
          <input type="text" />
        </>
      )}
    </div>
  );
};

export default FuncComponent;

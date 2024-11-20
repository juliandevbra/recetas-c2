import { useState } from "react";
import Message from "../Components/Message";
import { useNavigate } from "react-router-dom";

const Form = () => {
  //   const [nombre, setNombre] = useState("");
  //   const [direccion, setDireccion] = useState("");

  const [user, setUser] = useState({
    nombre: "",
    direccion: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /[0-9]/; // /\d/
    if (
      user.nombre.trim().length >= 3 &&
      !regexNum.test(user.nombre) &&
      regexNum.test(user.direccion) &&
      user.direccion.includes(" ")
    ) {
      setShow(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setError(true);
    }
  };
  console.log(user);

  return (
    <div>
      {/*  {condicon ? true : false} */}
      {show ? (
        <Message nombre={user.nombre} direccion={user.direccion} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            value={user.nombre}
            type="text"
            onChange={(e) => setUser({ ...user, nombre: e.target.value })}
          />
          <label>Direccion:</label>
          <input
            value={user.direccion}
            type="text"
            onChange={(e) => setUser({ ...user, direccion: e.target.value })}
          />
          <button>Enviar</button>

          {error && (
            <h4 style={{ color: "red" }}>
              Por favor, coloque la información correctamente
            </h4>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;

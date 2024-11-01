const Message = ({ nombre, direccion }) => {
  return (
    <>
      <h4>Gracias, {nombre}! </h4>
      <h4>En breves estará llegando tu pedido a {direccion}</h4>
    </>
  );
};

export default Message;

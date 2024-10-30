//Esto no es useState real, es solo una representación
const useState = (valorInicial) => {
  let estado = valorInicial;

  const actualizadorEstado = (valorNuevo) => {
    estado = valorNuevo;
  };

  return [estado, actualizadorEstado];
};

import React from "react";

const LoginForm = ({ handleLogin }) => {
  return (
    <div>
      <h3
      // style={{ display: "none" }}
      >
        Debe loguearse
      </h3>
      <input type="email" role="email" />
      <input type="password" data-testid="password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;

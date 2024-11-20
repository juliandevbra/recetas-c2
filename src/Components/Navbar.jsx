import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button onClick={() => navigate(-1)}>🔙</button>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/form">
        <h4>Form</h4>
      </Link>
      <Link to="/favs">
        <h4>Favoritos</h4>
      </Link>
    </nav>
  );
};
export default Navbar;

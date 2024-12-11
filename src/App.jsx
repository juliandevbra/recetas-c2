import "./styles/App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Form from "./Pages/Form";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Detail from "./Pages/Detail";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

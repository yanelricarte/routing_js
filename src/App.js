import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componentes/home/home";
import MostrarProducto from "./componentes/MostrarProducto";
import Registro from "./componentes/Registro";
import Login from "./componentes/Login";

function App() {
  return (
    <>
    <h1> react App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<MostrarProducto />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

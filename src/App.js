import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./componentes/home/home";
import MostrarProducto from "./componentes/MostrarProducto";
import Registro from "./componentes/Registro";
import Login from "./componentes/Login";

function App() {
  return (
    <>
      <h1>React App</h1>
      <BrowserRouter basename="/routing_js">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<MostrarProducto />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

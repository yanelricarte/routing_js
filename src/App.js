import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaProductos from "./componentes/ListaProductos";
import MostrarProducto from "./componentes/MostrarProducto";
import Registro from "./componentes/Registro";
import Login from "./componentes/Login";
import DetalleProducto from "./componentes/DetalleProducto";

function App() {
  return (
    <>
        <BrowserRouter basename="/routing_js">
          <Routes>
            <Route path="/" element={<ListaProductos />} />
            <Route path="/listaProductos" element={<ListaProductos />} />
            <Route path="/DetalleProducto/:id" element={<DetalleProducto />} />
            <Route path="/producto/:id" element={<MostrarProducto />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter> 
       
       
      </>
    );
  }

export default App;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./navbar/NavBar";

function DetalleProducto() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
            <NavBar />
        <h2>Detalle Producto</h2>
        <p>{producto.title}</p>
        <p>Precio: ${producto.price}</p>
        <p>Stock: {producto.rating.count}</p>
        <p>ID: {producto.id}</p>
      </div>
    );
  }
}

export default DetalleProducto;

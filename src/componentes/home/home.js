import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
        <h1> Inicio</h1>
        <Link to="/producto/1"> Ver Producto 1 </Link>
        <Link to="/registro"> Registro </Link>
        <Link to="/login"> Login </Link>

        </div>
            )

}

export default Home;
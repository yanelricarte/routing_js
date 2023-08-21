import React, { useState } from "react";

const Ejemplo = () => {
    //Declaramos el estado 'nombre' con el valor inicial Hermione
    const [nombre, SetNombre] = useState('Hermione');

    //Esta funcion cambia el valor del nombre a Harry
    const CambiaNombre = () => {
        SetNombre ('Harry');
    }
    return (
        <div>
        <h3> Ejemplos </h3>
        <h4> {nombre} </h4>
      
        <button onClick={ CambiaNombre }> Cambiar Nombre </button>
      </div>);
};

export default Ejemplo;

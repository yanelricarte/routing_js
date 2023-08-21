import React from 'react';
import './intro.css';
import icon from './icon.png';
import CustomButton from '../Button/customButton';



const Intro = ({ titulo }) => {
    return(
    <div className='contenedorImagen'>
    <img src={icon} className="icon" alt="Foto perfil "/>
    <h2> {titulo} </h2>

    <CustomButton color="red" texto="Botón intro" ></CustomButton>
    <CustomButton color="blue" texto="Botón intro" ></CustomButton>

    <CustomButton color="green" texto="Btn verde" ></CustomButton>


    </div>
)
}

export default Intro;
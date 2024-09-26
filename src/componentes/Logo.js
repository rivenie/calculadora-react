import React from "react";
import logo from "../imagenes/logo.svg"
import "../hojas-de-estilo/Logo.css"

const LogoPagina = () => (
  <div className="freecodecamp-logo-contenedor">
    <img src={logo} className="freecodecamp-logo" alt="Logo de freeCodeCamp" />    
  </div>
);

export default LogoPagina;

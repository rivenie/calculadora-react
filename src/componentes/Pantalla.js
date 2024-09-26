import React from "react";
import "../hojas-de-estilo/Pantalla.css"

/*
Para expresar una función no es necesario poner siempre la palabra "function" y la flecha. Sino también se puede declarar como una variable "const". Esto es más que nada para elementos más simples. 
Desestructuración: es el tipo de prop que no es llamado prop. Sino con otro nombre y entre llaves. En este caso {input}. 
*/
const Pantalla = ({input}) =>(
  <div className="input">
    {input}
  </div>
)

export default Pantalla;
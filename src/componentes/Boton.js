import React from "react";
import "../hojas-de-estilo/Boton.css";
/*
trimEnd(): elimina los espacios restantes al final de una cadena de caracteres.
props.children: este prop toma como valor el valor que se le incluya al llamarlo. En este caso en App.js se llama a la función Boton.

Explicación:

Dentro del className se usa `` para poder incluir una función JS a parte del primer nombre de clase. Se tendrá 2 nombres de clase. El primero boton-contenedor y el otro será un operador ternario. El cual su valor debe ser el props.children. En este caso se incluye la función llamada esOperador la cual tiene como parámetro el valor que se pone en App.js al llamar a la función Boton. Se usa ? para poder elegir un nombre de clase de las 2 opciones que se muestra: "operador" y "". Si es true se muestra "operador" de lo contrario no se muestra nada.

esOperador: esta función retorna un true o false acorde al valor del parámetro en props.children. isNan() para saber si no es un número, !== . para que no sea un punto y !== = para que no incluya un igual. Al ser true la clase es "operador". Sino "".

Luego de ver la explicación de App.js continuar:
Se está dando uso del prop. Dicho prop aquí tiene como valor "manejarClic". Y en App.js el prop "manejarClic" se está dando valor la función agregarInput declarada en App.js. Dicha función necesita un valor para su parámetro. Ese valor se está dando aquí con props.children el cual es igual al valor que se le da en App.js (como se ha explicado antes). Esto se acciona cuando se da clic al elemento. Gracias al onClic.

Explicación más detallada de los props:
En App.js se tiene llama al componente Boton.js de la siguiente manera 
<Boton manejarClic={(agregarInput)}>1</Boton>
Se está dando un valor a "props.manejarClic". Ese valor es "agregarInput". Por lo que aquí en "Boton.js" se vería así "agregarInput(props.children)"". Ya que se estaría llamando a la función y se le estaría dando un valor. Ese valor es props.children.

onClick: se tiene este parámetro el cual usualmente devuelve una función. Sin embargo, como se ve se está devolviendo un String. Para hacer indirectamente esto una función se debe poner ()=> como se muestra. De esta manera se está dando el valor de una función.
*/

function Boton(props){
  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '='); 
  };

  return(
    <div 
    className={`boton-contenedor ${esOperador(props.children) ? "operador" : ''}`.trimEnd()}
    onClick={() => props.manejarClic(props.children)}
    >      
      {props.children}
    </div>
  )
};

export default Boton;
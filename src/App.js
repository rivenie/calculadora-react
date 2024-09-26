import './App.css';
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import LogoPagina from './componentes/Logo';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


/*Al renderizar el componente Boton se incluye valores dentro de este. Más no parametros como se suele poner. Esto es por el prop.children. Dicho valor es igual a prop.children.*/
function App() {
  /*
  Se usará la función "useState" para poder poner los valores de lo números en la pantalla. El primer elemento del array llamado "input" será el valor del prop en el componente Pantalla. Por lo que el valor que se encuentre en el elemento array se mostrará como String en el componente pantalla.     

  Se crea una función llamada agregarInput la cual tiene como parámetro "val". Este usa el segundo parametro de setInput para actualizar el valor del primer parámetro del array sumando el primer parámetro con el parámetro de la función: setInput(input + val). Dicha función será incluida como el valor de los props de los botones. La explicación continuará en Boton.js. Ya que el valor de "val" se le da en Boton.js.

  manejarClear() aquí se está definiendo la función de forma anonima directamente aquí en vez de crearla con anterioridad y luego incluirla como se hizo con "agregarInput". Esta función lo que hace es hacer que el setInput sea '' por lo que "input" también será '' y por lo que lo que se mostrará en "Pantalla" será ''. Para accionarla debemos hacer que se ejecute desde el componente"BotonClear.js" usando "props.manejarClear" en un evento onClick.

  calcularResultado: esta función se le agrega a al "prop" de "Boton" con el valor =. Se calculará el resultado que se muestre en "Pantalla". Recordar que el valor que se muestra en "Pantalla" es "input". En esta función se usará setInput() para poder actualizar nuevamente el valor de "input". Dentro del setInput() se usará evaluate(). Dicha función evaluate se consigue de la librería "math.js". Esta librería se descarga e importa desde su misma página. 
  Se descarga desde el terminal con el comando "npm install mathjs". Luego de la descarga se importa como se ve en la parte superior. Se pueden ver todas las librerías que se están usando desde el archivo "package.json". Ahí se podrá ver el "mathjs". La función evaluate() resolverá matemáticamente lo que se encuentre en el "input". O sea en la "Pantalla". 

  Valores vacíos en PANTALLA:
  Al dar clic en igual sin haber puesto ni un dato en la Pantalla. Dará como resultado "undefined". Esto es un problema por lo que se debe de aplicar un condicional para saber si el valor de la pantalla es truthy or falsy. Que son valores que por si solos los valores son true or false. Eso funciona así: truthy es todo aquel datos string, int, etc. Y falsy es null o vacío. 
  Entonces la condicional será: si "input" es true se ejecuta el "setInput". Se lo contrario se realizará otra acción. 
  
  */
  const [input, setInput] = useState("");

  const agregarInput = val =>{
    setInput(input + val);
  }

  const calcularResultado = () =>{
    if(input && input.length > 1 && /\d$/.test(input)){    
      setInput(evaluate(input));    
  }else{
    alert("Coloca un dato para hacer el cálculo.");
  }
  }

  

  return (
    <div className="App">
      <LogoPagina/>
      <div className='contenedor-calculadora'>        
        <Pantalla input={input}/> 
        <div className='fila'>          
          <Boton manejarClic={(agregarInput)}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
          
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
          
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
          
        <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

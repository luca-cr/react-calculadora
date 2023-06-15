import './App.css';
import logo from './imagenes/logo1.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import Clear from './componentes/Clear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  }

  const borrar = () => {
    setInput('');
  }

  const resultado = () =>{
    if (input){
      setInput(evaluate(input));
    } else {
      borrar();
    }
  }

  return (
    <div className="App">
      <div className='fcc-logo-contenedor'>
        <img 
          src={logo}
          className='freecodecamp-logo'
          alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton  manejarClic={agregarInput}>4</Boton>
          <Boton  manejarClic={agregarInput}>5</Boton>
          <Boton  manejarClic={agregarInput}>6</Boton>
          <Boton  manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton  manejarClic={agregarInput}>7</Boton>
        <Boton  manejarClic={agregarInput}>8</Boton>
        <Boton  manejarClic={agregarInput}>9</Boton>
        <Boton  manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton  manejarClic={resultado}>=</Boton>
        <Boton  manejarClic={agregarInput}>0</Boton>
        <Boton  manejarClic={agregarInput}>.</Boton>
        <Boton  manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Clear manejarClear={borrar}>
            Clear
          </Clear>
        </div>
      </div>
    </div>
  );
}

export default App;

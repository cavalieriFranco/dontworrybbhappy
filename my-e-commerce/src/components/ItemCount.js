import React, {useState} from 'react';
import './ItemCount.css';



const ItemCount = ({stock, initial}) => {
  const [counter, setCounter] = useState (initial);

  const sumaCounter = () =>{
    if (counter < stock) {
      setCounter (counter + 1);
    }
  }
 
  const restaCounter = () =>{
    if (counter > 0) {
      setCounter (counter -1);
    }
  }
    return (
        <div className='CounterSection'>
          <div className='btn-section'>
            <button onClick={sumaCounter}>Agregar</button>
            <p> Cantidad : {counter}</p>
            <button onClick={restaCounter}>Quitar</button>
            <br></br>
            <button>Agregar al carrito</button>
          </div>
        </div>
    );
}

export default ItemCount;



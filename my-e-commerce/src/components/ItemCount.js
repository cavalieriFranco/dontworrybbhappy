import React, {useState} from 'react';
import './ItemCount.css';
import {Link} from 'react-router-dom';


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
            <Link to="/cart">
              <button>Terminar mi compra</button>
            </Link> 
          </div>
        </div>
    );
}

export default ItemCount;



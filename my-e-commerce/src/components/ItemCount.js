import React, {useState} from 'react';
import './ItemCount.css';


const ItemCount = () => {
  const [counter, setCounter] = useState (0);

  const handlerCounterUp = () =>{
    if (counter <= 9) {setCounter (counter + 1);
    }
  }
 
  const handlerCounterDown = () =>{
    if (counter >=1) {setCounter (counter -1);
    }
  }
    return (
        <div className='CounterSection'>
          <div className='btn-section'>
            <button onClick={handlerCounterUp}>Agregar</button>
            <p> Cantidad : {counter}</p>
            <button onClick={handlerCounterDown}>Quitar</button>
          </div>
        </div>
    );
}

export default ItemCount;

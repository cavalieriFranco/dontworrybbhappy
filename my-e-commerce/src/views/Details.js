import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer'
import {Link} from 'react-router-dom';


const Details = () => {
    return (
        <div>
            <h1>Detalle del Producto</h1>
            <Link to="/cart">
                <button>Terminar mi compra</button>
            </Link> 
            <ItemDetailContainer/>
        </div>
    )
}

export default Details;

import React, {} from 'react';
import '../components/ItemListContainer.css';

import {ItemsProvider} from '../CartContext';
import CartContainer from '../components/cartContainer';

const Cart = () => {


    return (
        <ItemsProvider>
            <div>
                <h1>Mi Carrito</h1>
                <hr></hr>
                <CartContainer/>
            </div>
        </ItemsProvider>
    )
}

export default Cart;

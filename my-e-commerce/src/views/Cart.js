import React, {} from 'react'

import {ItemsProvider} from '../CartContext';
import CartContainer from '../components/cartContainer';

const Cart = () => {


    return (
        <ItemsProvider>
            <div>
                <h1>Mi Carrito</h1>
                <CartContainer/>
            </div>
        </ItemsProvider>
    )
}

export default Cart;

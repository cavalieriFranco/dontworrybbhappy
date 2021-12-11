import React, { useContext } from 'react';
import { ItemsContext } from '../CartContext';
import {Link} from 'react-router-dom';

import CartItems from './cartItems';

const CartContainer = () => {
	const [items, setItems] = useContext(ItemsContext);

	return (
		<div>
			<button onClick={() => setItems([])}>Vaciar Carrito</button>
			<Link to="/">
              <button>Volver</button>
            </Link> 
			<hr></hr>
			{items.map((item) => {
				return <CartItems data={item} />;
			})}
			<ul>
                <li>Total : $10000</li>
                <li>Total + Iva: $12100</li>
            </ul>
		</div>
	);
};

export default CartContainer;





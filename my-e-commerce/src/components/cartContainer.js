import React, { useContext } from 'react';

import { ItemsContext } from '../CartContext';
import {Link} from 'react-router-dom';

import CartItems from './cartItems';

const CartContainer = () => {
	const [items, setItems] = useContext(ItemsContext);

	return (
		<div>
			<button onClick={() => setItems([])}>Vaciar Carrito</button>
			<Link to="/detail">
              <button>Volver</button>
            </Link> 
			{items.map((item) => {
				return <CartItems data={item} />;
			})}

		</div>
	);
};

export default CartContainer;





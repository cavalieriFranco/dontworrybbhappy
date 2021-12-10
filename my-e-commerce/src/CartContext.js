import React, { createContext, useState } from 'react';


export const ItemsContext = createContext();


const initialState = [
	{ id: 0, name: 'Pañales', price: 1200},
	{ id: 1, name: 'Esterilizador', price: 1700 },
	{ id: 2, name: 'Practicuna', price: 2100 },
];



export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState(initialState);

	return (
		<ItemsContext.Provider value={[items, setItems]}>
			{children}
		</ItemsContext.Provider>
	);
};



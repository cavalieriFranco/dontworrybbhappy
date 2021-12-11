import React, { createContext, useState } from 'react';


export const ItemsContext = createContext();


const initialState = [
	{ id: 0, name: 'Pañales', price: 1200, img:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2871582_f.jpg"},
	{ id: 1, name: 'Esterilizador', price: 1700, img:"https://www.farmacialeloir.com.ar/img/articulos/2020/09/tc_1aspen_esterilizador_calentador_de_mamaderas_electrico_2.jpg" },
	{ id: 2, name: 'Practicuna', price: 2100, img: "https://i2.wp.com/elultimokoala.com/blog/wp-content/uploads/2020/10/minicuna-colecho-shnuggle-7.jpg?resize=512%2C512&ssl=1"},
];



export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState(initialState);

	return (
		<ItemsContext.Provider value={[items, setItems]}>
			{children}
		</ItemsContext.Provider>
	);
};



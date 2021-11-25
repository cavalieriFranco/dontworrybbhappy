import React, {useEffect , useState} from 'react';

import './ItemList.css'

import Item from './Item';


const ItemList = () => {

    const [articulos, setArticulos] = useState ([])


    useEffect(()=>{
        fetch('http://127.0.0.1:5500/my-e-commerce/src/components/carrito.json')
        .then((response) => response.json ())
        .then((json) => setArticulos (json));
    }, []);
    
    return (
        <div className='ItemsContainer'>
            <div className='ItemsCards'>
                {articulos.map((articulo)=>{
                    return <Item data={articulo} key={articulo.id}/>;
                })}
            </div>
        </div>
    )
}

export default ItemList;

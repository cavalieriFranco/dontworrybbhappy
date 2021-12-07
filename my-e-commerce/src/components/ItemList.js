import React, {useEffect , useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './ItemListContainer.css'

import Item from './Item';


const ItemList = () => {

    const [articulos, setArticulos] = useState ([])


    

    useEffect(()=>{
        setTimeout(()=>{
        axios('http://127.0.0.1:5500/my-e-commerce/public/carrito.json')
        .then((res) => setArticulos (res.data));
        },1000);
     
    }, []);
    
    return (
        <div className='ItemsList'>
            <div className='ItemsCards'>
                {articulos.map((articulo)=>{
                    return (
                        <div key={articulo.id}>
                            <Link to={"/detail"}>
                                <Item data={articulo}/>;
                            </Link>
                        </div>
                    );
                })} 
            </div>
        </div>
    );
};

export default ItemList;
